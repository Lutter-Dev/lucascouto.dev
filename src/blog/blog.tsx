import { BasicCategory, BasicPost, BasicPostDetails } from '@api'
import { FlexBox, Footer } from '@ui'
import { FeaturedPosts } from './featured_posts/featured_posts'
import { PostsListSection } from './posts_list/posts_list'
import { CategoriesSection } from './category/categories'

type Props = {
  categories: BasicCategory[]
  posts: BasicPostDetails[]
  featuredPosts: BasicPost[]
}

export function BlogPage({ categories, posts, featuredPosts }: Props) {
  return (
    <FlexBox className="blog-page">
      <FlexBox className="blog-page-content" gap={48}>
        <FeaturedPosts posts={featuredPosts} />
        <PostsListSection posts={posts} />
        <CategoriesSection categories={categories} />
        <Footer />
      </FlexBox>
    </FlexBox>
  )
}
