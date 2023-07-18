import { FlexBox } from '@ui'
import { IntroSection } from './intro'
import { AboutMeSection } from './about_me'

export function HomePage() {
  return (
    <FlexBox direction="column">
      <IntroSection />
      <AboutMeSection />
    </FlexBox>
  )
}
