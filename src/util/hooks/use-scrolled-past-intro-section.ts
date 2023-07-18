import { useScrollPosition } from './use-scroll-position'
import { useWindowData } from './use-window-data'

export function useScrolledPastIntroSection() {
  const windowData = useWindowData()
  const scrollPosition = useScrollPosition()
  return scrollPosition.scrollY > windowData.height - 65
}
