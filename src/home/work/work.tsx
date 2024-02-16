import { DropdownMenu, FlexBox } from '@ui'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { WorkDetails } from './work_details'
import { Work } from './enum'
import { WorkDetailsImage } from './work_details_image'

type Props = {
  id?: string
}

export function WorkSection({ id }: Props) {
  const [selectedWork, setSelectedWork] = useState<Work>(Work.p4p)

  const { t } = useTranslation()

  const dropdownItems = Object.values(Work)

  return (
    <FlexBox id={id} className="work">
      <FlexBox className="content" justify="center" align="flex-end">
        <h2>{t('some_my_work')}</h2>
        <br />
        <br />

        <DropdownMenu
          items={dropdownItems}
          selectedItem={selectedWork}
          onItemSelected={(selectedItem) => {
            const work = Object.values(Work).find(
              (item, _) => item === selectedItem
            )

            if (work) {
              setSelectedWork(work)
            }
          }}
        />

        <br />
        <br />

        <WorkDetails work={selectedWork} />
      </FlexBox>

      <div className="divider" />

      <FlexBox className="image" align="center" justify="center">
        <WorkDetailsImage work={selectedWork} />
      </FlexBox>
    </FlexBox>
  )
}
