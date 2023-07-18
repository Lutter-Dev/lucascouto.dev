import { cn } from '@utils/cn'
import { useWindowData } from '@utils/hooks/use-window-data'
import { CSSProperties, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function Expanded({ children, className, style }: Props) {
  const windowData = useWindowData()

  return (
    <div
      className={cn('expanded', className)}
      style={{ width: windowData?.width, height: windowData?.height, ...style }}
    >
      {children}
    </div>
  )
}
