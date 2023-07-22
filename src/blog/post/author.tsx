import { BasicAuthor } from '@api'
import { FlexBox } from '@ui'
import Image from 'next/image'

type Props = {
  author?: BasicAuthor | null
}

export function AuthorSection({ author }: Props) {
  if (!author) return <></>

  return (
    <FlexBox className="author-section" gap={16} align="center">
      <FlexBox className="author-section-profile" align="center" gap={16}>
        <Image
          className="author-section-image"
          alt={author?.name ?? 'Author'}
          height={100}
          width={100}
          src={author.photo!.url}
          unoptimized
        />
        <h3 className="author-section-name">{author.name}</h3>
      </FlexBox>
      <p>{author.bio}</p>
    </FlexBox>
  )
}
