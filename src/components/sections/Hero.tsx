import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FlowDiagram } from '@/components/visuals/FlowDiagram'
import { siteConfig } from '@/config/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-14 sm:pt-20">
      <Container className="grid items-center gap-12 pb-16 sm:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="animate-fadeUp">
          <p className="text-sm font-medium text-signal-600">{siteConfig.tagline}</p>
          <h1 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.25rem]">
            Technology that solves real business problems.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            We build websites, software, automation, and AI-powered solutions
            that help businesses reduce manual work, improve customer
            experiences, and operate more efficiently.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href="#contact"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              {siteConfig.cta.primary}
            </Button>
            <Button href="#services" size="lg" variant="secondary">
              {siteConfig.cta.secondary}
            </Button>
          </div>
        </div>

        <div className="animate-fadeIn [animation-delay:150ms]">
          <FlowDiagram />
        </div>
      </Container>
    </section>
  )
}
