import { DecoratedContainer, DecoratedPicture, FlexBox } from '@ui'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  id?: string
}

export function BlogSection({ id }: Props) {
  return (
    <FlexBox id={id} className="blog">
      <FlexBox className="image" align="center" justify="center">
        <DecoratedPicture type="alt">
          <Image
            className="picture"
            src="/assets/images/logo.svg"
            alt="Lucas Couto"
            fill={true}
          />
        </DecoratedPicture>
      </FlexBox>
      <FlexBox className="content" justify="center">
        <h2>Blog</h2>
        <br />
        <br />
        <DecoratedContainer type="alt">
          <div>
            <p>
              This is something very recent for me, but I&apos;ve been enjoying
              a lot!
            </p>
            <br />
            <p>
              My intent with this is to share my experiences as a developer,
              create interesting tutorials and give tipos and tricks to
              hopefully help other help.
            </p>
            <br />
            <p>
              You can access it{' '}
              <Link className="link" href="/blog">
                here
              </Link>
              .
            </p>
          </div>
        </DecoratedContainer>
      </FlexBox>
    </FlexBox>
  )
}
