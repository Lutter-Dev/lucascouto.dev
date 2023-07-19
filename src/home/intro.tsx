import { Expanded, FlexBox } from '@ui'
import { useTranslation } from 'next-i18next'

type Props = {
  id?: string
}

export function IntroSection({ id }: Props) {
  const { t } = useTranslation()

  return (
    <FlexBox id={id} direction="row">
      <Expanded className="intro-primary">
        <FlexBox className="h-full" align="center" justify="center">
          <h1 className="intro-text">{t('developing_products')}</h1>
          <div className="intro divider" />
          <h2 className="intro-text">{t('more_than_code')}</h2>
        </FlexBox>
      </Expanded>
      <Expanded className="intro-secondary">
        <div className="logo" />
      </Expanded>
    </FlexBox>
  )
}
