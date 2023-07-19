import { NavigationMobileMenuToggle } from './navigation_mobile_menu_toggle'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@utils/cn'
import { NavigationItem } from './navigation_item'
import { useTranslation } from 'next-i18next'
import { ThemeToggle } from '../theme_toggle'
import { useWindowData } from '@utils/hooks/use-window-data'
import { useScrolledPastIntroSection } from '@utils/hooks/use-scrolled-past-intro-section'

export function MainNavigationHeader() {
  const windowData = useWindowData()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrolledPastIntroSection = useScrolledPastIntroSection()

  const { t } = useTranslation()

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!windowData.isMobile && isMobileMenuOpen) {
      toggleMobileMenu()
    }
  }, [isMobileMenuOpen, toggleMobileMenu, windowData.isMobile])

  return (
    <div className={cn('navigation-container', isMobileMenuOpen ? 'open' : '')}>
      <div
        className={cn('navigation-overlay', isMobileMenuOpen ? 'open' : '')}
        onClick={toggleMobileMenu}
      />
      <div
        className={cn(
          'navigation-menu',
          scrolledPastIntroSection ? 'show-background' : ''
        )}
      >
        <NavigationMobileMenuToggle
          className={isMobileMenuOpen ? 'open' : ''}
          onClick={toggleMobileMenu}
        />
        <div
          className={cn(
            'navigation-menu-items',
            isMobileMenuOpen ? 'open' : ''
          )}
        >
          <ul>
            <NavigationItem
              label={t('about')}
              linkTo="#about-me"
              toggleMobileMenu={toggleMobileMenu}
            />
            <NavigationItem
              label={t('work')}
              linkTo="#work"
              toggleMobileMenu={toggleMobileMenu}
            />
            <NavigationItem
              label={t('blog')}
              linkTo="#blog"
              toggleMobileMenu={toggleMobileMenu}
            />
            <NavigationItem
              label={t('contact')}
              linkTo="#contact"
              toggleMobileMenu={toggleMobileMenu}
            />
            <ThemeToggle />
          </ul>
        </div>
      </div>
    </div>
  )
}
