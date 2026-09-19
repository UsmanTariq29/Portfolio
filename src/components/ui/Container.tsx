import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
}

export function Container({ children, className, as = 'div' }: ContainerProps) {
  const Tag = as
  return (
    <Tag className={cn('mx-auto w-full max-w-content px-5 sm:px-8', className)}>
      {children}
    </Tag>
  )
}
