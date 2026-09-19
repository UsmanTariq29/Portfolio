export interface PortfolioProject {
  id: string
  name: string
  subtitle: string
  label: 'Concept Project'
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
    label: 'Concept Project',
    problem:
      'A concept for a small business that receives leads through its website but has no consistent way to qualify, track, or follow up with them — leads sit in an inbox until someone remembers to respond.',
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
      'Illustrates how a business could respond to new leads faster and with less manual tracking, using automation instead of relying on someone to check an inbox.',
    technologies: ['React', 'TypeScript', 'Node.js', 'CRM API', 'Automation Workflow'],
  },
  {
    id: 'opsflow',
    name: 'OpsFlow',
    subtitle: 'Business Process Automation',
    label: 'Concept Project',
    problem:
      'A concept for a small business where administrative work — intake forms, data entry, status updates — is repeated manually across multiple tools every day.',
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
      'Illustrates how routine administrative work could move through a defined workflow automatically instead of depending on manual handoffs between people and tools.',
    technologies: ['React', 'TypeScript', 'Workflow Automation', 'REST API', 'Webhooks'],
  },
]
