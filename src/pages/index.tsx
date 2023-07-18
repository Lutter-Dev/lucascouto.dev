import { MainNavigationHeader } from '@ui'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import React from 'react'
import { HomePage } from 'src/home/home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lucas Couto</title>
      </Head>
      <MainNavigationHeader />
      <HomePage />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!))
    }
  }
}
