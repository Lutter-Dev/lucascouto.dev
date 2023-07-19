import { DropdownMenu, FlexBox } from '@ui'
import { cn } from '@utils/cn'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const HATCH = 'Hatch'
const ACTIVITE = 'Activite Personal'

const works = [HATCH, ACTIVITE]

type Props = {
  id?: string
}

export function WorkSection({ id }: Props) {
  const [selectedWork, setSelectedWork] = useState(works[0])

  const { t } = useTranslation()

  return (
    <FlexBox id={id} className="work">
      <FlexBox className="content" justify="center" align="flex-end">
        <h2>{t('some_my_work')}</h2>
        <br />
        <br />
        <DropdownMenu
          items={works}
          selectedItem={selectedWork}
          onItemSelected={(selectedItem) => {
            setSelectedWork(selectedItem)
          }}
        />
        <br />
        <div className={selectedWork == HATCH ? 'visible' : 'hidden'}>
          <p>{t('hatch_description')}</p>
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
              {t('app')}
            </Link>
          </FlexBox>
        </div>
        <div className={selectedWork == ACTIVITE ? 'visible' : 'hidden'}>
          <p>{t('activite_description_1')}</p>
          <br />
          <p>{t('activite_description_2')}</p>
          <br />
          <p>{t('activite_description_3')}</p>
        </div>
      </FlexBox>
      <div className="divider" />
      <FlexBox className="image" align="center" justify="center">
        <Image
          className={cn(
            'picture',
            selectedWork == HATCH ? 'visible' : 'hidden'
          )}
          src="/assets/images/hatch.webp"
          alt="Hatch logo"
          fill={true}
        />
        <Image
          className={cn(
            'picture',
            selectedWork == ACTIVITE ? 'visible' : 'hidden'
          )}
          src="/assets/images/activite.webp"
          alt="Activite Personal logo"
          fill={true}
        />
      </FlexBox>
    </FlexBox>
  )
}
