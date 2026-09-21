import { Plus } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faqItems } from '@/data/faq'

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          title="Questions worth asking"
          description="Fair questions to ask any agency before working together — answered directly."
        />

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium text-navy-900 marker:content-none">
                <span>{item.question}</span>
                <Plus
                  className="mt-0.5 h-5 w-5 shrink-0 text-signal-600 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
