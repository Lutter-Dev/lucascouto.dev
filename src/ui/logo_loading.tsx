import React from 'react'
import { Expanded } from './expanded'
import { FlexBox } from './flex_box'
import Image from 'next/image'
import { DecoratedPicture } from './decorated_picture'

export function LogoLoading() {
  return (
    <Expanded className="logo-loading">
      <FlexBox className="logo-loading-content" justify="center" align="center">
        <DecoratedPicture type="alt">
          <Image
            src="/assets/images/logo.svg"
            alt="App logo"
            width={100}
            height={100}
          />
        </DecoratedPicture>
      </FlexBox>
    </Expanded>
  )
}
