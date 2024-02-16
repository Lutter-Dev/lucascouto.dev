import Link from 'next/link'
import { Work } from './enum'
import { useTranslation } from 'next-i18next'
import { FlexBox } from '@ui'

type Props = {
  work: Work
}

export function WorkDetails({ work }: Props) {
  const { t } = useTranslation()

  if (work === Work.p4p) {
    return (
      <div>
        <p>{t('p4p_description_1')}</p>
        <br />
        <p>{t('p4p_description_2')}</p>
        <br />
        <p>{t('p4p_description_3')}</p>
        <br />
        <FlexBox direction="row" justify="flex-end" gap={16}>
          <Link
            className="link"
            href="https://www.postcardsforparents.com/"
            target="_blank"
          >
            {t('site')}
          </Link>
        </FlexBox>
      </div>
    )
  }

  if (work === Work.hatch) {
    return (
      <div>
        <p>{t('hatch_description_1')}</p>
        <br />
        <p>{t('hatch_description_2')}</p>
        <br />
        <p>{t('hatch_description_3')}</p>
        <br />
        <FlexBox direction="row" justify="flex-end" gap={16}>
          <Link
            className="link"
            href="https://www.addhatch.com/"
            target="_blank"
          >
            {t('site')}
          </Link>
          <Link
            className="link"
            href="https://www.addhatch.com/app"
            target="_blank"
          >
            {t('web_app')}
          </Link>
          <Link
            className="link"
            href="https://play.google.com/store/apps/details?id=com.turtle.hatch"
            target="_blank"
          >
            {t('android')}
          </Link>
          <Link
            className="link"
            href="https://apps.apple.com/us/app/hatch-freelancing-made-easy/id1640547748"
            target="_blank"
          >
            {t('ios')}
          </Link>
        </FlexBox>
      </div>
    )
  }

  if (work === Work.turtle) {
    return (
      <div className="WorkDetails">
        <p>{t('turtle_description_1')}</p>
        <br />
        <p>{t('turtle_description_2')}</p>
        <ul>
          <li>{t('turtle_description_2_1')}</li>
          <li>{t('turtle_description_2_2')}</li>
        </ul>
        <br />
        <p>{t('turtle_description_3')}</p>
        <br />
        <FlexBox direction="row" justify="flex-end" gap={16}>
          <Link className="link" href="https://turtleos.com/" target="_blank">
            {t('site')}
          </Link>
          <Link
            className="link"
            href="https://play.google.com/store/apps/details?id=com.turtle.mobile"
            target="_blank"
          >
            {t('android')}
          </Link>
          <Link
            className="link"
            href="https://apps.apple.com/us/app/turtleos/id1299195526"
            target="_blank"
          >
            {t('ios')}
          </Link>
        </FlexBox>
      </div>
    )
  }

  if (work === Work.activite) {
    return (
      <div>
        <p>{t('activite_description_1')}</p>
        <br />
        <p>{t('activite_description_2')}</p>
        <br />
        <p>{t('activite_description_3')}</p>
        <br />
        <FlexBox direction="row" justify="flex-end" gap={16}>
          <Link
            className="link"
            href="https://www.activitepersonal.com/"
            target="_blank"
          >
            {t('site')}
          </Link>
        </FlexBox>
      </div>
    )
  }

  return <></>
}
