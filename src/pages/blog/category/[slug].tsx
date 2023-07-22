import { BasicCategory, BasicPost, Locale, createApi } from '@api'
import { LogoLoading } from '@ui'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { BlogNavigationHeader, CategoryPostsPage } from '@blog'

type Props = {
  posts?: BasicPost[]
  categories?: BasicCategory[]
}

export default function CategoryPost({ posts, categories }: Props) {
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
      <CategoryPostsPage posts={posts} categories={categories} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const api = createApi()

  const postsResponse = await api.getCategoryPosts({
    slug: params!.slug!.toString(),
    locale: locale as Locale
  })

  const categoriesResponse = await api.getCategories({
    locale: locale as Locale
  })

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      posts: postsResponse.posts,
      categories: categoriesResponse.categories
    }
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const api = createApi()

  const categoriesResponse = await api.getCategories({
    locale: locales![0] as Locale
  })

  return {
    paths: categoriesResponse.categories.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: true
  }
}
