import { createApi } from '@api'
import { BlogNavigationHeader, BlogPage } from '@blog'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import React from 'react'
import { BasicCategory, BasicPost, BasicPostDetails, Locale } from '@api'

type Props = {
  categories?: BasicCategory[]
  posts?: BasicPostDetails[]
  featuredPosts?: BasicPost[]
}

export default function Blog({ categories, posts, featuredPosts }: Props) {
  return (
    <div>
      <Head>
        <title>Lucas Couto - Blog</title>
      </Head>
      <BlogNavigationHeader categories={categories ?? []} />
      <BlogPage
        categories={categories ?? []}
        featuredPosts={featuredPosts ?? []}
        posts={posts ?? []}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const api = createApi()

  const categoriesResponse = await api.getCategories({
    locale: locale as Locale
  })
  const postsResponse = await api.getPosts({ locale: locale as Locale })
  const featuredPostsResponse = await api.getFeaturedPosts({
    locale: locale as Locale
  })

  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      categories: categoriesResponse.categories.map((item) => item),
      posts: postsResponse.posts.map((post) => post),
      featuredPosts: featuredPostsResponse.posts.map((post) => post)
    }
  }
}
