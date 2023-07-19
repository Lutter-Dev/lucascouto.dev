import { DecoratedContainer, DecoratedPicture, FlexBox } from '@ui'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  id?: string
}

export function AboutMeSection({ id }: Props) {
  const { t } = useTranslation()

  return (
    <FlexBox id={id} className="about-me">
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
      <FlexBox className="content" justify="center">
        <h2>{t('about_me')}</h2>
        <br />
        <br />
        <h1>{t('hi_im_lucas')}</h1>
        <br />
        <DecoratedContainer>
          <div>
            <p>{t('bio')}</p>
            <br />
            <p>
              {t('check_out_resume')}{' '}
              <Link className="link" href={process.env.RESUME_URL || ''} target='_blank'>
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
