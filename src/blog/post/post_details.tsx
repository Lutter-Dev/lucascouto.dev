import { BasicPostDetails } from '@api'
import { FlexBox, Icon, PostRichText } from '@ui'
import { formatDate } from '@utils/date'
import Image from 'next/image'

type Props = {
  post: BasicPostDetails
}

export function PostDetails({ post }: Props) {
  return (
    <FlexBox className="post-details" align="center">
      <Image
        className="post-details-image"
        src={post.featuredImage.url}
        alt={post.title}
        fill={true}
      />
      <FlexBox className="post-details-content">
        <br />
        <h1 className="post-details-title">{post.title}</h1>
        <br />
        <FlexBox direction="row" justify="flex-end" align="center" gap={8}>
          <Icon icon="calendar" size={24} />
          <p className="post-details-date">{formatDate(post.createdAt)}</p>
        </FlexBox>
        <br />
        <br />
        <PostRichText text={post.content} />
      </FlexBox>
    </FlexBox>
  )
}
