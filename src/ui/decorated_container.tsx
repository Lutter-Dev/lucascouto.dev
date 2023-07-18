import { cn } from '@utils/cn'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  type?: 'main' | 'alt'
}

export function DecoratedContainer({ children, type = 'main' }: Props) {
  return (
    <div className="decorated-container">
      <div className={cn('decoration', type)} />
      <div className={cn('decoration-children', type)}>{children}</div>
    </div>
  )
}
