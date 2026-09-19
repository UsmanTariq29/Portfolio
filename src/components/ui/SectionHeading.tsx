import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export function SectionHeading({
  title,
  description,
  align = 'left',
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <h2 className="font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-steel sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
