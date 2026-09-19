import type { LucideIcon } from 'lucide-react'
import { Search, Lightbulb, Hammer, LifeBuoy } from 'lucide-react'

export interface ProcessStep {
  step: number
  icon: LucideIcon
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: Search,
    title: 'Understand the Problem',
    description:
      'We start with a conversation about how your business actually runs today — the bottlenecks, the manual steps, and where things break down.',
  },
  {
    step: 2,
    icon: Lightbulb,
    title: 'Identify the Opportunity',
    description:
      'We look for the highest-impact place to start: the website, workflow, or system that will make the biggest practical difference.',
  },
  {
    step: 3,
    icon: Hammer,
    title: 'Build the Right Solution',
    description:
      'We design and build a solution scoped to your actual needs — not an over-engineered platform, and not a fragile quick fix.',
  },
  {
    step: 4,
    icon: LifeBuoy,
    title: 'Improve & Support',
    description:
      'Once it is live, we monitor, maintain, and refine it, and stay available as your business and its needs continue to change.',
  },
]
