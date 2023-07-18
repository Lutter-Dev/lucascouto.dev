import { cn } from '@utils/cn'
import { useScrolledPastIntroSection } from '@utils/hooks/use-scrolled-past-intro-section'
import Link from 'next/link'

type Props = {
  label: string
  linkTo: string
  toggleMobileMenu: () => void
}

export function NavigationItem({ label, linkTo, toggleMobileMenu }: Props) {
  const scrolledPastIntroSection = useScrolledPastIntroSection()

  return (
    <li
      className={cn(
        'navigation-item',
        scrolledPastIntroSection ? 'past-intro' : ''
      )}
    >
      <Link className="link" href={linkTo} onClick={toggleMobileMenu}>
        {label}
      </Link>
    </li>
  )
}
