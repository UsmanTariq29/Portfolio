export interface ContactFormValues {
  name: string
  email: string
  company: string
  website: string
  helpWith: string
  message: string
}

export const initialContactFormValues: ContactFormValues = {
  name: '',
  email: '',
  company: '',
  website: '',
  helpWith: '',
  message: '',
}

export const helpTopics = [
  'Website Development & Improvement',
  'Custom Business Software',
  'Business Process Automation',
  'AI Automation & AI Agents',
  'CRM & API Integrations',
  'Website Maintenance & Technical Support',
  'Not sure yet',
] as const

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Client-side validation. Returns an error map; an empty object means valid. */
export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter an email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.helpWith) {
    errors.helpWith = 'Please select what you would like help with.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please add a short message so we know how to help.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please provide a little more detail (10+ characters).'
  }

  return errors
}

/**
 * Placeholder submission handler.
 *
 * No backend is connected yet. This function intentionally does NOT send
 * an email or create a real record — it only simulates a network call so
 * the UI (loading / success states) can be built and tested honestly.
 *
 * To connect a real backend, replace the body of this function with one
 * of the following (pick one):
 *
 *   1) Formspree
 *      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
 *        body: JSON.stringify(values),
 *      })
 *      if (!res.ok) throw new Error('Submission failed')
 *
 *   2) EmailJS
 *      import emailjs from '@emailjs/browser'
 *      await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', values, 'PUBLIC_KEY')
 *
 *   3) Resend (via your own API route / serverless function)
 *      const res = await fetch('/api/contact', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify(values),
 *      })
 *      if (!res.ok) throw new Error('Submission failed')
 *
 *   4) Custom API / CRM
 *      Point the fetch call at your own backend or CRM's inbound-lead
 *      endpoint (e.g. HubSpot Forms API, a custom Express/Node route, etc.)
 */
export async function submitContactForm(
  values: ContactFormValues,
): Promise<{ success: true }> {
  // Simulated latency so the UI's loading state is visible during local dev.
  await new Promise((resolve) => setTimeout(resolve, 700))

  console.info(
    '[contact-form] No backend connected yet. Form values captured locally:',
    values,
  )

  return { success: true }
}
