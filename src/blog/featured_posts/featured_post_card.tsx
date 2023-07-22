import React from 'react'
import Link from 'next/link'
import { BasicPost } from '@api'
import { FlexBox } from '@ui'
import { formatDate } from '@utils/date'

type Props = {
  post: BasicPost
}

export function FeaturedPostCard({ post }: Props) {
  return (
    <FlexBox
      className="featured-post-card"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    >
      <Link
        className="featured-post-card-content"
        href={`/blog/post/${post.slug}`}
      >
        <p className="title">{post.title}</p>
        <p className="date">{formatDate(post.createdAt)}</p>
      </Link>
    </FlexBox>
  )
}
