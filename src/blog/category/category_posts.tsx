import { BasicCategory, BasicPost } from '@api'
import { PostCard } from '../posts_list/post_card'
import { CategoriesSection } from './categories'
import { FlexBox, Footer } from '@ui'

type Props = {
  posts?: BasicPost[]
  categories?: BasicCategory[]
}

export function CategoryPostsPage({ posts, categories }: Props) {
  return (
    <FlexBox className="category-posts">
      <FlexBox className="category-posts-content" gap={48}>
        <FlexBox>
          {posts?.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </FlexBox>
        <CategoriesSection categories={categories} />
        <Footer />
      </FlexBox>
    </FlexBox>
  )
}
