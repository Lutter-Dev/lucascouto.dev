import { FlexBox, Footer } from '@ui'
import { IntroSection } from './intro'
import { AboutMeSection } from './about_me'
import { WorkSection } from './work'
import { BlogSection } from './blog'
import { ContactSection } from './contact'

export function HomePage() {
  return (
    <FlexBox>
      <IntroSection />
      <AboutMeSection id="about-me" />
      <WorkSection id="work" />
      <BlogSection id="blog" />
      <ContactSection id="contact" />
      <Footer />
    </FlexBox>
  )
}
