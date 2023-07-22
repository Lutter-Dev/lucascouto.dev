import { cn } from '@utils/cn'
import { useScrolledPastIntroSection } from '@utils/hooks/use-scrolled-past-intro-section'
import Link from 'next/link'

type Props = {
  className?: string
  label: string
  linkTo: string
  toggleMobileMenu: () => void
}

export function NavigationItem({
  className,
  label,
  linkTo,
  toggleMobileMenu
}: Props) {
  const scrolledPastIntroSection = useScrolledPastIntroSection()

  return (
    <li
      className={cn(
        'navigation-item',
        scrolledPastIntroSection ? 'past-intro' : '',
        className
      )}
    >
      <Link className="link" href={linkTo} onClick={toggleMobileMenu}>
        {label}
      </Link>
    </li>
  )
}
