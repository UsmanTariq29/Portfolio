import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface BadgeProps {
  children: ReactNode
  tone?: 'signal' | 'navy' | 'neutral'
  className?: string
}

const tones = {
  signal: 'bg-signal-50 text-signal-700 border-signal-200',
  navy: 'bg-navy-50 text-navy-700 border-navy-200',
  neutral: 'bg-white text-steel border-line',
}

export function Badge({ children, tone = 'signal', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
