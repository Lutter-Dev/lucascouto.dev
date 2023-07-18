import { cn } from '@utils/cn'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  type?: 'main' | 'alt'
}

export function DecoratedPicture({ children, type = 'main' }: Props) {
  return (
    <div className="decorated-picture">
      <div className="decoration">
        <div className={cn('image', type)} />
      </div>
      <div className="decoration-children">{children}</div>
    </div>
  )
}
