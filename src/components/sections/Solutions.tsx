import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { solutions } from '@/data/solutions'

export function Solutions() {
  return (
    <section id="solutions" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Common starting points"
          description="Most projects begin with one specific frustration, not a full transformation. Here are a few we hear often."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-line bg-white p-6"
            >
              <h3 className="text-base font-semibold text-navy-900">
                {item.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
