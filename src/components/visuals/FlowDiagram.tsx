import { AlertCircle, Link2, Zap, TrendingUp } from 'lucide-react'

const nodes = [
  {
    label: 'Business Problem',
    detail: 'Manual work, disconnected tools',
    icon: AlertCircle,
  },
  {
    label: 'Connected Systems',
    detail: 'Website, CRM, and tools linked',
    icon: Link2,
  },
  {
    label: 'Automation',
    detail: 'Repetitive steps run on their own',
    icon: Zap,
  },
  {
    label: 'Better Operations',
    detail: 'Less manual work, more growth',
    icon: TrendingUp,
  },
]

/**
 * A custom-built diagram (no stock imagery) illustrating how a business
 * problem moves through connected systems and automation toward a better
 * operating state. Built with plain SVG + CSS so it stays lightweight.
 */
export function FlowDiagram() {
  return (
    <div
      role="img"
      aria-label="Diagram: a business problem moves through connected systems and automation to reach better operations and growth."
      className="relative rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-medium text-steel">How the pieces connect</span>
        <span className="flex h-2.5 w-2.5 rounded-full bg-signal-500" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-0">
        {nodes.map((node, index) => {
          const Icon = node.icon
          const isLast = index === nodes.length - 1
          return (
            <div key={node.label}>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-navy-100 bg-navy-50 text-navy-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{node.label}</p>
                  <p className="text-xs text-steel">{node.detail}</p>
                </div>
              </div>
              {!isLast && (
                <div className="ml-[22px] flex h-7 items-center" aria-hidden="true">
                  <svg width="2" height="28" viewBox="0 0 2 28" fill="none">
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="28"
                      stroke="#84A3B5"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
