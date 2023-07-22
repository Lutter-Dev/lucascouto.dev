import { BasicCategory, BasicComment, BasicPost, BasicPostDetails } from '@api'
import { PostDetails } from './post_details'
import { FlexBox, Footer } from '@ui'
import { AuthorSection } from './author'
import { CommentsForm } from './comments_form'
import { Comments } from './comments'
import { CategoriesSection } from '../category/categories'
import { RelatedPosts } from './related_posts'

type Props = {
  post?: BasicPostDetails
  comments?: BasicComment[]
  categories?: BasicCategory[]
  relatedPosts?: BasicPost[]
}

export function PostPage({ post, comments, categories, relatedPosts }: Props) {
  if (!post) return <></>

  return (
    <FlexBox className="post-page">
      <FlexBox className="post-page-content" gap={48}>
        <PostDetails post={post} />
        <AuthorSection author={post.author} />
        <CommentsForm slug={post.slug} />
        <Comments comments={comments} />
        <RelatedPosts posts={relatedPosts} />
        <CategoriesSection categories={categories} />
        <Footer />
      </FlexBox>
    </FlexBox>
  )
}
