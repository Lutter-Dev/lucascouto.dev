import { useTheme } from '@utils/theme/use-theme'
import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState
} from 'react'

export const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {}
})

type Props = {
  children?: ReactNode
}

export function ThemeContextProvider(props: Props) {
  const { isDarkTheme, setIsDarkTheme } = useTheme()

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme: isDarkTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
