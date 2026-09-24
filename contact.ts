import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createHash } from 'node:crypto'
import { Resend } from 'resend'

/**
 * POST /api/contact
 *
 * Vercel serverless function. Validates the contact form on the server and
 * sends it to the business inbox through Resend. The Resend API key is read
 * from a server-only environment variable and never reaches the browser.
 *
 * Environment variables (Vercel -> Project -> Settings -> Environment Variables):
 *   RESEND_API_KEY      required  Resend API key (server-side only, no VITE_ prefix)
 *   CONTACT_TO_EMAIL    required  Inbox that receives submissions
 *   CONTACT_FROM_EMAIL  optional  Verified sender, e.g. "ZAVRYON Website <website@zavryon.com>"
 *                                 Defaults to Resend's test sender.
 */

const DEFAULT_FROM = 'ZAVRYON Website <onboarding@resend.dev>'

// Field limits. Keep in sync with the client-side validation in the form.
const LIMITS = {
  name: 100,
  email: 254,
  company: 150,
  website: 200,
  helpWith: 100,
  messageMin: 10,
  messageMax: 5000,
}

// Submissions faster than this (ms since the form was shown) are treated as bots.
const MIN_FILL_TIME_MS = 3000

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const WEBSITE_RE = /^(https?:\/\/)?[^\s/$.?#][^\s]*\.[^\s]{2,}$/i

type ContactInput = {
  name: string
  email: string
  company: string
  website: string
  helpWith: string
  message: string
}

type FieldErrors = Partial<Record<keyof ContactInput, string>>

/** Single-line field: trim, drop control characters and line breaks. */
function cleanLine(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u001F\u007F]+/g, ' ').trim().slice(0, max + 1)
}

/** Multi-line field: trim, normalise line breaks, drop other control characters. */
function cleanText(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  return value
    .replace(/\r\n?/g, '\n')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, max + 1)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function validate(body: Record<string, unknown>): { data: ContactInput; errors: FieldErrors } {
  const data: ContactInput = {
    name: cleanLine(body.name, LIMITS.name),
    email: cleanLine(body.email, LIMITS.email).toLowerCase(),
    company: cleanLine(body.company, LIMITS.company),
    website: cleanLine(body.website, LIMITS.website),
    helpWith: cleanLine(body.helpWith, LIMITS.helpWith),
    message: cleanText(body.message, LIMITS.messageMax),
  }

  const errors: FieldErrors = {}

  if (!data.name) errors.name = 'Please enter your name.'
  else if (data.name.length > LIMITS.name) errors.name = 'Name is too long.'

  if (!data.email) errors.email = 'Please enter your email address.'
  else if (data.email.length > LIMITS.email || !EMAIL_RE.test(data.email))
    errors.email = 'Please enter a valid email address.'

  if (data.company.length > LIMITS.company) errors.company = 'Company name is too long.'

  if (data.website && (data.website.length > LIMITS.website || !WEBSITE_RE.test(data.website)))
    errors.website = 'Please enter a valid website, e.g. yourbusiness.com.'

  if (!data.helpWith) errors.helpWith = 'Please choose what you would like help with.'
  else if (data.helpWith.length > LIMITS.helpWith) errors.helpWith = 'Please choose a valid option.'

  if (!data.message) errors.message = 'Please enter a message.'
  else if (data.message.length < LIMITS.messageMin)
    errors.message = `Please add a little more detail (at least ${LIMITS.messageMin} characters).`
  else if (data.message.length > LIMITS.messageMax)
    errors.message = `Message is too long (maximum ${LIMITS.messageMax} characters).`

  return { data, errors }
}

function buildEmail(d: ContactInput, submittedAt: Date) {
  const when = submittedAt.toUTCString()
  const rows: Array<[string, string]> = [
    ['Name', d.name],
    ['Email', d.email],
    ['Company', d.company || 'Not provided'],
    ['Website', d.website || 'Not provided'],
    ['Help with', d.helpWith],
    ['Submitted', when],
  ]

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#5C7080;white-space:nowrap;vertical-align:top;">${label}</td>` +
        `<td style="padding:6px 0;color:#0B1E2A;">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#F6F6F2;font-family:Inter,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#FFFFFF;border:1px solid #E4E3DC;border-radius:8px;padding:24px;">
    <h1 style="margin:0 0 4px;font-size:18px;color:#0F2A3D;">New Free Business Review request</h1>
    <p style="margin:0 0 16px;font-size:13px;color:#5C7080;">Sent from the ZAVRYON website contact form. Reply to this email to respond directly to ${escapeHtml(d.name)}.</p>
    <table style="border-collapse:collapse;font-size:14px;margin-bottom:16px;">${htmlRows}</table>
    <h2 style="margin:0 0 8px;font-size:14px;color:#0F2A3D;">Message</h2>
    <div style="font-size:14px;line-height:1.6;color:#0B1E2A;white-space:pre-wrap;border-left:3px solid #1E7A5F;padding-left:12px;">${escapeHtml(d.message)}</div>
  </div>
</body></html>`

  const text = [
    'New Free Business Review request',
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    d.message,
    '',
    `Reply to this email to respond directly to ${d.name}.`,
  ].join('\n')

  const subject = `New Business Review request: ${d.name}${d.company ? ` (${d.company})` : ''}`

  return { subject: subject.slice(0, 200), html, text }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM

  if (!apiKey || !to) {
    console.error('[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable.')
    return res
      .status(500)
      .json({ ok: false, error: 'The form is temporarily unavailable. Please email us directly.' })
  }

  // Vercel parses JSON bodies automatically; fall back to parsing a raw string.
  let body: Record<string, unknown> = {}
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {})
  } catch {
    return res.status(400).json({ ok: false, error: 'Invalid request.' })
  }
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return res.status(400).json({ ok: false, error: 'Invalid request.' })
  }

  // Spam protection 1: honeypot. Real users never see or fill this field.
  // Pretend success so bots don't learn they were blocked.
  if (typeof body.fax === 'string' && body.fax.trim() !== '') {
    return res.status(200).json({ ok: true })
  }

  // Spam protection 2: submitted impossibly fast after the form appeared.
  const startedAt = Number(body.startedAt)
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return res.status(200).json({ ok: true })
  }

  const { data, errors } = validate(body)
  if (Object.keys(errors).length > 0) {
    return res
      .status(400)
      .json({ ok: false, error: 'Please check the highlighted fields and try again.', fields: errors })
  }

  const { subject, html, text } = buildEmail(data, new Date())

  // Duplicate protection: identical submissions (same person, same message)
  // within 24 hours share an idempotency key, so Resend sends them only once.
  const fingerprint = createHash('sha256')
    .update([data.email, data.name, data.helpWith, data.message].join('\u0000'))
    .digest('hex')

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send(
      {
        from,
        to: [to],
        replyTo: data.email,
        subject,
        html,
        text,
      },
      { idempotencyKey: `contact/${fingerprint}` },
    )

    if (error) {
      // The same message was already sent (or is being sent right now).
      if (error.name === 'invalid_idempotent_request' || error.name === 'concurrent_idempotent_requests') {
        return res.status(200).json({ ok: true, duplicate: true })
      }
      // Log only the error type, never the visitor's details.
      console.error('[contact] Resend error:', error.name)
      return res
        .status(502)
        .json({ ok: false, error: 'We could not send your message right now. Please try again in a moment.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err instanceof Error ? err.name : 'unknown')
    return res
      .status(500)
      .json({ ok: false, error: 'Something went wrong on our side. Please try again in a moment.' })
  }
}
