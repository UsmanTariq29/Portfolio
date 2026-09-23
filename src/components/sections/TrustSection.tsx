import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const points = [
  'A clear, defined process from first conversation to delivery',
  'Transparent scoping you know what is being built and why',
  'Solutions designed around your workflow, not a generic template',
  'Direct communication with the person doing the work',
]

export function TrustSection() {
  return (
    <section className="border-y border-line bg-white py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
            Built around your business, not a template.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Every business runs a little differently. Rather than fitting you
            into a pre-built platform, we start by understanding how your
            business actually operates and design the solution around that
            not the other way around.
          </p>
        </div>

        <ul className="space-y-4">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-signal-600"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-navy-900 sm:text-base">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
