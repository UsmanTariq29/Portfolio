export interface PortfolioProject {
  id: string
  name: string
  subtitle: string
  image: string
  imageAlt: string
  problem: string
  solution: string
  features: string[]
  outcome: string
  technologies: string[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'leadflow',
    name: 'LeadFlow',
    subtitle: 'Lead Management & Follow-Up System',
    image: '/portfolio/leadflow-dashboard.svg',
    imageAlt:
      'LeadFlow dashboard showing captured leads, their status, and assigned follow-up automations.',
    problem:
      'A small business receiving leads through its website with no consistent way to qualify, track, or follow up with them — leads sit in an inbox until someone remembers to respond.',
    solution:
      'A connected system that captures leads directly from the website, automatically qualifies them based on defined criteria, syncs them into a CRM, and triggers timely automated follow-up.',
    features: [
      'Website lead capture form with validation',
      'Automatic lead qualification rules',
      'CRM integration and record sync',
      'Automated follow-up sequences',
      'Business dashboard for lead status and activity',
    ],
    outcome:
      'Businesses respond to new leads faster and with less manual tracking, using automation instead of relying on someone to check an inbox.',
    technologies: ['React', 'TypeScript', 'Node.js', 'CRM API', 'Automation Workflow'],
  },
  {
    id: 'opsflow',
    name: 'OpsFlow',
    subtitle: 'Business Process Automation',
    image: '/portfolio/opsflow-dashboard.svg',
    imageAlt:
      'OpsFlow kanban board showing form submissions moving through Submitted, Processing, Review, and Complete stages.',
    problem:
      'A small business where administrative work — intake forms, data entry, status updates — is repeated manually across multiple tools every day.',
    solution:
      'An automated pipeline that takes a form submission, processes and validates the data, routes it through the correct workflow, and updates connected systems automatically.',
    features: [
      'Structured form submission and intake',
      'Automated workflow routing',
      'Data processing and validation',
      'Notifications to staff and customers',
      'CRM / API integration',
      'Reporting dashboard for completed and pending items',
    ],
    outcome:
      'Routine administrative work moves through a defined workflow automatically instead of depending on manual handoffs between people and tools.',
    technologies: ['React', 'TypeScript', 'Workflow Automation', 'REST API', 'Webhooks'],
  },
]
