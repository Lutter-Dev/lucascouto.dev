import { BasicCategory } from '@api'
import { NavigationItem, NavigationMobileMenuToggle, ThemeToggle } from '@ui'
import { cn } from '@utils/cn'
import { useWindowData } from '@utils/hooks/use-window-data'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

type Props = {
  categories: BasicCategory[]
}

export function BlogNavigationHeader({ categories }: Props) {
  const windowData = useWindowData()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!windowData.isMobile && isMobileMenuOpen) {
      toggleMobileMenu()
    }
  }, [isMobileMenuOpen, toggleMobileMenu, windowData.isMobile])

  return (
    <div
      className={cn(
        'blog-navigation',
        'navigation-container',
        isMobileMenuOpen ? 'open' : ''
      )}
    >
      <div
        className={cn('navigation-overlay', isMobileMenuOpen ? 'open' : '')}
        onClick={toggleMobileMenu}
      />
      <div className={cn('navigation-menu', 'show-background')}>
        <div className="navigation-menu-content">
          <NavigationMobileMenuToggle
            className={isMobileMenuOpen ? 'open' : ''}
            onClick={toggleMobileMenu}
          />
          <Link className="logo" href="/blog" />
          <div
            className={cn(
              'navigation-menu-items',
              isMobileMenuOpen ? 'open' : ''
            )}
          >
            <ul>
              {categories.slice(0, 3).map((category) => (
                <NavigationItem
                  key={category.slug}
                  className="past-intro"
                  label={category.name}
                  linkTo={`/blog/category/${category.slug}`}
                  toggleMobileMenu={toggleMobileMenu}
                />
              ))}
              <ThemeToggle />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
