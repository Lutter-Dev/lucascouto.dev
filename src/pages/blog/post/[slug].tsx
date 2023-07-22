import {
  BasicCategory,
  BasicComment,
  BasicPost,
  BasicPostDetails,
  Locale,
  createApi
} from '@api'
import { BlogNavigationHeader, PostPage } from '@blog'
import { LogoLoading } from '@ui'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
  categories?: BasicCategory[]
  post?: BasicPostDetails
  comments?: BasicComment[]
  relatedPosts?: BasicPost[]
}

export default function PostDetailsPage({
  categories,
  post,
  comments,
  relatedPosts
}: Props) {
  const router = useRouter()

  if (router.isFallback) {
    return <LogoLoading />
  }

  return (
    <div>
      <Head>
        <title>Lucas Couto - Blog</title>
      </Head>
      <BlogNavigationHeader categories={categories ?? []} />
      <PostPage
        post={post}
        comments={comments}
        categories={categories}
        relatedPosts={relatedPosts}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const api = createApi()

  const postResponse = await api.getPostDetails({
    slug: params!.slug!.toString(),
    locale: locale as Locale
  })

  const categoriesResponse = await api.getCategories({
    locale: locale as Locale
  })

  const commentsResponse = await api.getComments({
    slug: params!.slug!.toString()
  })

  const relatedPostsResponse = await api.getSimilarPosts({
    slug: params!.slug!.toString(),
    categories: categoriesResponse.categories.map((item) => item.slug),
    locale: locale as Locale
  })

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      categories: categoriesResponse.categories,
      post: postResponse.post,
      comments: commentsResponse.comments,
      relatedPosts: relatedPostsResponse.posts
    }
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const api = createApi()

  const response = await api.getPosts({ locale: locales![0] as Locale })

  return {
    paths: response.posts.map((post) => `/blog/post/${post.slug}`),
    fallback: true
  }
}
