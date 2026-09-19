import { Linkedin, Github, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'

const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how-we-help', label: 'How We Help' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-navy-950 text-navy-100">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-300">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Site</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-300">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.location}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-navy-700 text-navy-200 transition-colors hover:border-navy-500 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-navy-700 text-navy-200 transition-colors hover:border-navy-500 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-800 pt-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Portfolio projects shown on this site are concept/demo projects unless explicitly identified otherwise.</p>
        </div>
      </Container>
    </footer>
  )
}
