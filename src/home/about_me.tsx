import { DecoratedPicture, Expanded, FlexBox } from '@ui'
import Image from 'next/image'
import { DecoratedContainer } from 'src/ui/decorated_container'

export function AboutMeSection() {
  return (
    <FlexBox className="about-me">
      <Expanded>
        <FlexBox className="image" align="center" justify="center">
          <DecoratedPicture>
            <Image
              className="picture"
              src="/assets/images/lucas_couto.jpg"
              alt="Lucas Couto"
              fill={true}
            />
          </DecoratedPicture>
        </FlexBox>
      </Expanded>
      <Expanded>
        <FlexBox className="content" justify="center">
          <h2>About me</h2>
          <br />
          <br />
          <br />
          <h1>Hi, I&apos;m Lucas!</h1>
          <br />
          <DecoratedContainer>
            <div>
              <p>
                I am a passionate software developer from Brazil with over 10
                years of experience. During this time, I found that my real
                drive lies in building products by creating apps with great
                visuals, high-quality code base and amazing user experience.
                This also means helping to create and maintain a solid product
                vision.
              </p>
              <br />
              <p>You can check out my resume here.</p>
            </div>
          </DecoratedContainer>
        </FlexBox>
      </Expanded>
    </FlexBox>
  )
}
