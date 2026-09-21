/**
 * Central site configuration.
 *
 * Everything brand-specific (name, tagline, contact details, social links,
 * and repeated CTA text) lives here. Update this file and the change
 * propagates through the entire site — no need to hunt through components.
 */

export const siteConfig = {
  /** Placeholder brand name. Replace once the ZAVRYON is finalized. */
  name: 'ZAVRYON',

  /** Short form used in tight spaces (mobile nav, footer legal line). */
  shortName: 'ZAVRYON',

  tagline: 'We Solve Problems. You Grow.',

  description:
    'We build websites, software, automation, and AI solutions that solve practical business problems for small and mid-sized companies.',

  founder: {
    name: 'Usman Tariq',
    title: 'Founder & Software Solutions Developer',
  },

  contact: {
    email: 'contact@zavryon.com',
  },

  social: {
    linkedin: 'www.linkedin.com/in/usman-tariq-rajput29',
    github: 'https://github.com/your-profile',
  },

  cta: {
    primary: 'Book a Free Business Review',
    secondary: 'See How We Solve Problems',
  },

  /** Base URL used for canonical / Open Graph tags. Update on deploy. */
  url: 'https://example.com',
} as const

export type SiteConfig = typeof siteConfig
