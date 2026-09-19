import type { LucideIcon } from 'lucide-react'
import {
  Globe,
  LayoutGrid,
  Workflow,
  Bot,
  Plug,
  Wrench,
} from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  problem: string
  whatWeDo: string
  outcome: string
}

export const services: Service[] = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Website Development & Improvement',
    problem:
      "Your website is often a customer's first impression — and an outdated or confusing one costs you leads before a conversation even starts.",
    whatWeDo:
      'We design and build fast, professional websites, or improve an existing one, with clear messaging and a layout that guides visitors toward contacting you.',
    outcome:
      'A site that loads quickly, works well on every device, and makes it easy for the right customers to reach you.',
  },
  {
    id: 'custom-software',
    icon: LayoutGrid,
    title: 'Custom Business Software',
    problem:
      'Off-the-shelf tools rarely match how your business actually operates, forcing your team into awkward workarounds and spreadsheets.',
    whatWeDo:
      'We build software designed around your existing workflow — internal tools, client portals, dashboards, and booking or scheduling systems.',
    outcome:
      'A tool your team actually wants to use, because it fits the way you already work instead of forcing you to change it.',
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Business Process Automation',
    problem:
      'Repetitive manual tasks — data entry, follow-ups, scheduling, reporting — quietly consume hours every week.',
    whatWeDo:
      'We map out repetitive workflows and automate the manual steps, connecting the tools you already use so information moves on its own.',
    outcome:
      'Fewer hours lost to repetitive work, fewer manual errors, and more time for the work that actually grows the business.',
  },
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'AI Automation & AI Agents',
    problem:
      "Most businesses know AI could help somewhere, but aren't sure where it fits or whether it's worth the investment.",
    whatWeDo:
      'We identify practical, well-scoped AI opportunities — document processing, customer support assistance, content drafting, data summarization — and build them responsibly.',
    outcome:
      'AI applied to specific, measurable tasks instead of added for its own sake, with a clear understanding of what it does and does not do.',
  },
  {
    id: 'integrations',
    icon: Plug,
    title: 'CRM & API Integrations',
    problem:
      "Your website, CRM, email platform, and internal tools don't talk to each other, so someone ends up copying data between systems by hand.",
    whatWeDo:
      'We connect your systems and automate the processes that currently require manual work, so data flows between platforms without anyone re-typing it.',
    outcome:
      'One consistent source of information across your tools, and less time spent reconciling data between systems.',
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Website Maintenance & Technical Support',
    problem:
      "A website or system that isn't maintained slowly falls behind — broken links, outdated plugins, security gaps, and no one available to fix them.",
    whatWeDo:
      'We provide ongoing maintenance, monitoring, updates, and technical support so your site and tools keep running reliably.',
    outcome:
      'Peace of mind that your systems are cared for, with a clear point of contact when something needs attention.',
  },
]
