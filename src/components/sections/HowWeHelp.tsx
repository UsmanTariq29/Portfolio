import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { processSteps } from '@/data/process'

export function HowWeHelp() {
  return (
    <section id="how-we-help" className="bg-navy-900 py-20 text-white sm:py-28">
      <Container>
        <SectionHeading
          title="How we help"
          description="A straightforward process, from first conversation to ongoing support."
          className="[&_h2]:text-white [&_p]:text-navy-200"
        />

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => {
            const Icon = item.icon
            const isLast = index === processSteps.length - 1
            return (
              <li key={item.step} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-signal-500/15 text-signal-400">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-navy-300">Step {item.step}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">
                  {item.description}
                </p>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute right-[-1rem] top-4 hidden h-px w-8 bg-navy-700 lg:block"
                  />
                )}
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
