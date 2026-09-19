import { User } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          {/* Placeholder profile photo — replace with a real headshot. */}
          <div className="flex aspect-square w-full max-w-xs items-center justify-center rounded-xl border border-line bg-navy-50">
            <User className="h-16 w-16 text-navy-300" aria-hidden="true" />
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
            About
          </h2>

          <p className="mt-6 text-lg font-medium text-navy-900">
            {siteConfig.founder.name}
          </p>
          <p className="text-sm text-steel">{siteConfig.founder.title}</p>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              {siteConfig.name} is built around a simple idea: technology
              should make a business simpler, not more complicated. That
              means resisting the urge to over-build, avoiding unnecessary
              complexity, and focusing on solutions that fit how a business
              actually operates.
            </p>
            <p>
              The work centers on practical software and automation —
              websites that convert, systems that connect, and workflows
              that remove repetitive manual work — built with attention to
              both the technical details and the day-to-day reality of
              running a business.
            </p>
            <p>
              Every engagement starts with understanding the problem before
              proposing a solution, and stays scoped to what will actually
              move the business forward.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
