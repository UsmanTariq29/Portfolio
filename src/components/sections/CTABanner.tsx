import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export function CTABanner() {
  return (
    <section className="bg-navy-900 py-16 sm:py-20">
      <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl">
            {siteConfig.cta.primary}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-200">
            Have a website, workflow, or business process that isn&apos;t
            working as well as it should? Let&apos;s take a look and identify
            practical opportunities to improve it.
          </p>
        </div>
        <Button
          href="#contact"
          size="lg"
          icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          className="shrink-0"
        >
          {siteConfig.cta.primary}
        </Button>
      </Container>
    </section>
  )
}
