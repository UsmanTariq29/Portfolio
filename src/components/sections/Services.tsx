import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data/services'

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Services"
          description="Practical software and automation work, scoped to the problem in front of you rather than a fixed package."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  {service.problem}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {service.whatWeDo}
                </p>
                <div className="mt-4 border-t border-line pt-4">
                  <p className="text-sm font-medium text-signal-600">Expected outcome</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-900">
                    {service.outcome}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
