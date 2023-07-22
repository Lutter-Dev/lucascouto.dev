import { BasicPostDetails } from '@api'
import { FlexBox } from '@ui'
import { PostCard } from './post_card'

type Props = {
  posts: BasicPostDetails[]
}

export function PostsListSection({ posts }: Props) {
  return (
    <FlexBox className="post-list-section" gap={48}>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </FlexBox>
  )
}
