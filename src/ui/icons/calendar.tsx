import { cn } from '@utils/cn'
import { FillColor } from './icon'

type Props = {
  size: number
  fill: FillColor
  className?: string
}

export function CalendarIcon({ className, size, fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('icon', fill, className)}
      width={size}
      height={size}
      viewBox="0 -960 960 960"
    >
      <path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z" />
    </svg>
  )
}
