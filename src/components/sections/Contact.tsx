import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, Linkedin, Github, AlertCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { FormField, inputClasses } from '@/components/ui/FormField'
import { siteConfig } from '@/config/site'
import {
  type ContactFormValues,
  initialContactFormValues,
  helpTopics,
  validateContactForm,
  submitContactForm,
} from '@/lib/contactForm'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialContactFormValues)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  function updateField<K extends keyof ContactFormValues>(field: K, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setStatus('submitting')
    try {
      await submitContactForm(values)
      setStatus('success')
      setValues(initialContactFormValues)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="contact" className="bg-white py-20 sm:py-28">
        <Container className="max-w-xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-signal-50 text-signal-600">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="mt-5 font-serif text-2xl font-semibold text-navy-900">
            Thanks your message has been captured.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            This form isn&apos;t connected to a live inbox yet. Until a
            backend is wired up, please also reach out directly at{' '}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-medium text-signal-700 underline underline-offset-2"
            >
              {siteConfig.contact.email}
            </a>{' '}
            so nothing gets missed.
          </p>
          <Button
            variant="secondary"
            className="mt-6"
            onClick={() => setStatus('idle')}
          >
            Send another message
          </Button>
        </Container>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            title={siteConfig.cta.primary}
            description="Have a website, workflow, or business process that isn't working as well as it should? Let's take a look and identify practical opportunities to improve it."
          />

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2.5 text-sm font-medium text-navy-900 hover:text-signal-700"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2.5 text-sm font-medium text-navy-900 hover:text-signal-700"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2.5 text-sm font-medium text-navy-900 hover:text-signal-700"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>

          {/*<p className="mt-8 text-xs leading-relaxed text-steel">*/}
          {/*  Note: this form currently stores your message locally in the*/}
          {/*  browser only — no email or CRM is connected yet. See{' '}*/}
          {/*  <code className="rounded bg-navy-50 px-1 py-0.5">*/}
          {/*    src/lib/contactForm.ts*/}
          {/*  </code>{' '}*/}
          {/*  for where to plug in Formspree, EmailJS, Resend, or a custom API.*/}
          {/*</p>*/}
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 rounded-xl border border-line bg-paper p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Name" htmlFor="name" required error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className={inputClasses}
                value={values.name}
                onChange={(e) => updateField('name', e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
            </FormField>

            <FormField label="Business email" htmlFor="email" required error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={inputClasses}
                value={values.email}
                onChange={(e) => updateField('email', e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
            </FormField>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Company" htmlFor="company">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className={inputClasses}
                value={values.company}
                onChange={(e) => updateField('company', e.target.value)}
              />
            </FormField>

            <FormField label="Website" htmlFor="website">
              <input
                id="website"
                name="website"
                type="text"
                inputMode="url"
                placeholder="yourbusiness.com"
                autoComplete="url"
                className={inputClasses}
                value={values.website}
                onChange={(e) => updateField('website', e.target.value)}
              />
            </FormField>
          </div>

          <FormField
            label="What would you like help with?"
            htmlFor="helpWith"
            required
            error={errors.helpWith}
          >
            <select
              id="helpWith"
              name="helpWith"
              className={inputClasses}
              value={values.helpWith}
              onChange={(e) => updateField('helpWith', e.target.value)}
              aria-invalid={Boolean(errors.helpWith)}
              aria-describedby={errors.helpWith ? 'helpWith-error' : undefined}
            >
              <option value="">Select an option</option>
              {helpTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Message" htmlFor="message" required error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={inputClasses}
              value={values.message}
              onChange={(e) => updateField('message', e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
          </FormField>

          {status === 'error' && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Something went wrong. Please try again or email us directly.
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending…' : siteConfig.cta.primary}
          </Button>
        </form>
      </Container>
    </section>
  )
}
