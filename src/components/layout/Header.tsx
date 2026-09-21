import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how-we-help', label: 'How We Help' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        isScrolled
          ? 'border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80'
          : 'border-transparent bg-paper'
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-sm text-base font-semibold tracking-tight text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal-500 sm:text-lg"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-900 text-sm font-bold text-white"
          >
            {siteConfig.shortName.replace(/[[\]]/g, '').slice(0, 1)}
          </span>
          {siteConfig.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" size="md" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            {siteConfig.cta.primary}
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 lg:hidden"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {isMobileOpen && (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper px-5 pb-6 pt-2 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-navy-900 hover:bg-navy-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            href="#contact"
            size="md"
            className="mt-4 w-full"
            onClick={() => setIsMobileOpen(false)}
          >
            {siteConfig.cta.primary}
          </Button>
        </div>
      )}
    </header>
  )
}
