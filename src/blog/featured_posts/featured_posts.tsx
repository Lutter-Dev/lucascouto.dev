import { BasicPost } from '@api'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FeaturedPostCard } from './featured_post_card'
import { cn } from '@utils/cn'
import { Icon } from '@ui'

type Props = {
  posts: BasicPost[]
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1
  }
}

export function FeaturedPosts({ posts }: Props) {
  const customLeftArrow = (
    <div className={cn('carousel-arow', 'left')}>
      <Icon icon="arrow_left" fill="secondary" />
    </div>
  )

  const customRightArrow = (
    <div className={cn('carousel-arow', 'right')}>
      <Icon icon="arrow_right" fill="secondary" />
    </div>
  )

  return (
    <div className="featured-posts">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        transitionDuration={500}
        deviceType="desktop"
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
      >
        {posts.map((post) => (
          <FeaturedPostCard key={post.slug} post={post} />
        ))}
      </Carousel>
    </div>
  )
}
