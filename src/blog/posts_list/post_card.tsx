import { BasicPost } from '@api'
import { FlexBox } from '@ui'
import { formatDate } from '@utils/date'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  post: BasicPost
}

export function PostCard({ post }: Props) {
  const { t } = useTranslation()

  return (
    <FlexBox className="post-card">
      <Image
        unoptimized
        alt={post.title}
        className="post-card-image"
        src={post.featuredImage?.url}
        fill={true}
      />
      <FlexBox className="post-card-content">
        <h1>{post.title}</h1>
        <br />
        <p>{post.excerpt}</p>
        <br />
        <br />
        <FlexBox direction="row" justify="space-between">
          <p>{formatDate(post.createdAt)}</p>
          <Link className="link" href={`/blog/post/${post.slug}`}>
            {t('continue_reading')}
          </Link>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}
