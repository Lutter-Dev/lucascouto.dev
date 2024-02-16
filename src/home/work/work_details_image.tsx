import Image from 'next/image'
import { Work } from './enum'

type Props = {
  work: Work
}

export function WorkDetailsImage({ work }: Props) {
  if (work === Work.p4p) {
    return (
      <Image
        className="picture"
        src="/assets/images/p4p.webp"
        alt="Hatch logo"
        fill={true}
      />
    )
  }

  if (work === Work.hatch) {
    return (
      <Image
        className="picture"
        src="/assets/images/hatch.webp"
        alt="Hatch logo"
        fill={true}
      />
    )
  }

  if (work === Work.turtle) {
    return (
      <Image
        className="picture"
        src="/assets/images/turtle.webp"
        alt="Hatch logo"
        fill={true}
      />
    )
  }

  if (work === Work.activite) {
    return (
      <Image
        className="picture"
        src="/assets/images/activite.webp"
        alt="Activite Personal logo"
        fill={true}
      />
    )
  }

  return <></>
}
