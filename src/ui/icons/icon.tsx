import { ArrowLeftIcon } from './arrow_left'
import { ArrowRightIcon } from './arrow_right'
import { CalendarIcon } from './calendar'

type IconData = 'arrow_left' | 'arrow_right' | 'calendar'

export type FillColor = 'primary' | 'secondary' | 'primary-alt'

type Props = {
  icon: IconData
  className?: string
  size?: number
  fill?: FillColor
}

export function Icon({
  icon,
  className,
  size = 32,
  fill = 'primary-alt'
}: Props) {
  switch (icon) {
    case 'arrow_left':
      return <ArrowLeftIcon className={className} size={size} fill={fill} />

    case 'arrow_right':
      return <ArrowRightIcon className={className} size={size} fill={fill} />

    case 'calendar':
      return <CalendarIcon className={className} size={size} fill={fill} />

    default:
      return <></>
  }
}
