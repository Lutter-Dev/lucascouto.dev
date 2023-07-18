import { ThemeContext } from '@utils/theme/theme_provider'
import { useContext } from 'react'

export function ThemeToggle() {
  const theme = useContext(ThemeContext)

  return (
    <div
      className="theme-toggle"
      onClick={() => {
        theme.toggleTheme()
      }}
    >
      <div className="theme-notch">
        <div className="night-crater" />
        <div className="night-crater" />
      </div>
    </div>
  )
}
