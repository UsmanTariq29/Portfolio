export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: "You're a newer agency — why should I trust you with my project?",
    answer:
      "We're upfront about being early-stage. What we can offer is transparency — a clear process, a scoped proposal before any work begins, and direct communication with the person actually building your project rather than being routed through account managers.",
  },
  {
    question: 'What happens after I book a Free Business Review?',
    answer:
      "We'll ask a few questions about how your business currently operates, then look at the specific website, workflow, or system you want improved. You'll get a short summary of what we found and a few practical next steps — whether or not you decide to work with us.",
  },
  {
    question: 'How does pricing and payment work?',
    answer:
      'Every project is scoped and quoted before work begins, based on what you actually need — there is no fixed package pricing. Payment structure (e.g. deposit plus milestones) is agreed on in writing as part of the proposal, so there are no surprises partway through.',
  },
  {
    question: 'Will my data and business information stay confidential?',
    answer:
      "Yes. We're happy to sign an NDA before discussing anything sensitive, and we don't reuse, publish, or share client information or code without permission.",
  },
  {
    question: 'How quickly do you respond?',
    answer:
      'We aim to respond to new inquiries within one business day.',
  },
  {
    question: 'Do you only work with US-based businesses?',
    answer:
      'The focus is on US small and mid-sized businesses, but the work is fully remote — location is rarely a blocker as long as there is reasonable overlap for communication.',
  },
]
