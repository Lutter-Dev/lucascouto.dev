import { DropdownMenu, FlexBox } from '@ui'
import { cn } from '@utils/cn'
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

  return (
    <FlexBox id={id} className="work">
      <FlexBox className="content" justify="center" align="flex-end">
        <h2>Some of my work</h2>
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
          <p>
            Hatch is a platform that helps people start working together in just
            a few seconds. Using this app you can create a contract, track time
            and get paid.
          </p>
          <br />
          <FlexBox direction="row" justify="flex-end" gap={16}>
            <Link
              className="link"
              href="https://www.addhatch.com/"
              target="_blank"
            >
              Website
            </Link>
            <Link
              className="link"
              href="https://www.addhatch.com/app"
              target="_blank"
            >
              App
            </Link>
          </FlexBox>
        </div>
        <div className={selectedWork == ACTIVITE ? 'visible' : 'hidden'}>
          <p>
            Activite Personal is a companion app for Personal Trainers to help
            with their daily routine by allowing them to create fitness
            assessments of their clients. It was built using Flutter, supporting
            both Android and iOS.
          </p>
          <br />
          <p>
            I&apos;m extremely proud of the work I did on this project,
            especially because I was able to work on everything related to it:
            the app itself, API, UX, design, website and marketing.
          </p>
          <br />
          <p>Unfortunately it was discontinued in late 2022.</p>
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
