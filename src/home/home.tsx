import { FlexBox, Footer } from '@ui'
import { IntroSection } from './intro'
import { AboutMeSection } from './about_me'
import { WorkSection } from './work/work'
import { ContactSection } from './contact'

export function HomePage() {
  return (
    <FlexBox>
      <IntroSection />
      <AboutMeSection id="about-me" />
      <WorkSection id="work" />
      <ContactSection id="contact" />
      <Footer />
    </FlexBox>
  )
}
