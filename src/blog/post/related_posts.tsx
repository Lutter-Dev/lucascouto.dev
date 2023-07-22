import React from 'react'
import { BasicPost } from '@api'
import Image from 'next/image'
import { formatDate } from '@utils/date'
import Link from 'next/link'
import { FlexBox } from '@ui'
import { useTranslation } from 'next-i18next'

type Props = {
  posts?: BasicPost[]
}

export function RelatedPosts({ posts }: Props) {
  const { t } = useTranslation()

  return (
    <FlexBox className="related-posts">
      <h3 className="related-posts-title">{t('related_posts')}</h3>
      {!posts || posts.length == 0 ? (
        <p className="no-posts">{t('no_related_posts')}</p>
      ) : (
        <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2">
          {posts?.map((post) => (
            <Link
              className="related-post"
              key={post.slug}
              href={`/blog/post/${post.slug}`}
            >
              <Image
                className="image"
                alt={post.title}
                width={60}
                height={60}
                src={post.featuredImage.url}
                unoptimized
              />
              <FlexBox justify="center">
                <p>{post.title}</p>
                <p className="date">{formatDate(post.createdAt)}</p>
              </FlexBox>
            </Link>
          ))}
        </div>
      )}
    </FlexBox>
  )
}
