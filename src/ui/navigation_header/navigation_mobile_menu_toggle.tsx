import { cn } from '@utils/cn'

type Props = {
  className?: string
  onClick: () => void
}

export function NavigationMobileMenuToggle({ className, onClick }: Props) {
  return (
    <div
      className={cn('header-mobile-menu visible md:invisible', className)}
      onClick={onClick}
    >
      <div className="toggle-container">
        <div className="toggle" />
        <div className="toggle" />
        <div className="toggle" />
      </div>
    </div>
  )
}
