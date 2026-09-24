/**
 * Client-side helper for the contact form.
 * Calls our own /api/contact endpoint. It never talks to Resend directly and
 * never needs an API key.
 */

export type ContactPayload = {
  name: string
  email: string
  company?: string
  website?: string
  helpWith: string
  message: string
  /** Hidden honeypot field. Leave empty. */
  fax?: string
  /** Date.now() captured when the form was first shown. Optional anti-spam signal. */
  startedAt?: number
}

export type ContactFieldErrors = Partial<
  Record<'name' | 'email' | 'company' | 'website' | 'helpWith' | 'message', string>
>

export class ContactSubmitError extends Error {
  fields?: ContactFieldErrors
  constructor(message: string, fields?: ContactFieldErrors) {
    super(message)
    this.name = 'ContactSubmitError'
    this.fields = fields
  }
}

const GENERIC_ERROR =
  'We could not send your message right now. Please try again, or email us directly.'

// Guards against double clicks / double submits while a request is in flight.
let inFlight: Promise<void> | null = null

export function submitContact(payload: ContactPayload): Promise<void> {
  if (inFlight) return inFlight

  inFlight = (async () => {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 15000)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      let data: { ok?: boolean; error?: string; fields?: ContactFieldErrors } = {}
      try {
        data = await res.json()
      } catch {
        // Non-JSON response (e.g. platform error page)
      }

      if (!res.ok || !data.ok) {
        throw new ContactSubmitError(data.error || GENERIC_ERROR, data.fields)
      }
    } catch (err) {
      if (err instanceof ContactSubmitError) throw err
      throw new ContactSubmitError(GENERIC_ERROR)
    } finally {
      window.clearTimeout(timeout)
      inFlight = null
    }
  })()

  return inFlight
}
