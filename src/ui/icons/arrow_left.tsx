import { cn } from '@utils/cn'
import { FillColor } from './icon'

type Props = {
  size: number
  fill: FillColor
  className?: string
}

export function ArrowLeftIcon({ className, size, fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('icon', fill, className)}
      width={size}
      height={size}
      fill={fill}
      viewBox="0 -960 960 960"
    >
      <path d="m 652,-80 -400,-400 400,-400 56,57 -343,343 343,343 z" />
    </svg>
  )
}
