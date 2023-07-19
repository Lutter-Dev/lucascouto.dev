import { DecoratedContainer, DecoratedPicture, FlexBox } from '@ui'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  id?: string
}

export function BlogSection({ id }: Props) {
  const { t } = useTranslation()

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
        <h2>{t('blog')}</h2>
        <br />
        <br />
        <DecoratedContainer type="alt">
          <div>
            <p>{t('blog_1')}</p>
            <br />
            <p>{t('blog_2')}</p>
            <br />
            <p>
              {t('can_access')}{' '}
              <Link className="link" href="/blog">
                {t('here')}
              </Link>
              .
            </p>
          </div>
        </DecoratedContainer>
      </FlexBox>
    </FlexBox>
  )
}
