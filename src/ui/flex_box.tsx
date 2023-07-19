import { CSSProperties, ReactNode } from 'react'

type Direction = 'column' | 'row'
type AlignItems = 'flex-start' | 'center' | 'flex-end'
type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between'

type Props = {
  id?: string
  children: ReactNode
  direction?: Direction
  className?: string
  style?: CSSProperties
  justify?: JustifyContent
  align?: AlignItems
  gap?: number
}

export function FlexBox({
  id,
  children,
  direction = 'column',
  className,
  style,
  justify,
  align = 'flex-start',
  gap = 0
}: Props) {
  return (
    <div
      id={id}
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction,
        alignSelf: 'stretch',
        ...style,
        alignItems: align,
        justifyContent: justify,
        gap
      }}
    >
      {children}
    </div>
  )
}
