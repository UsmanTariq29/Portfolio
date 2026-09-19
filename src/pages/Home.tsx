import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { HowWeHelp } from '@/components/sections/HowWeHelp'
import { Solutions } from '@/components/sections/Solutions'
import { TrustSection } from '@/components/sections/TrustSection'
import { Portfolio } from '@/components/sections/Portfolio'
import { About } from '@/components/sections/About'
import { CTABanner } from '@/components/sections/CTABanner'
import { Contact } from '@/components/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeHelp />
      <Solutions />
      <TrustSection />
      <Portfolio />
      <About />
      <CTABanner />
      <Contact />
    </>
  )
}
