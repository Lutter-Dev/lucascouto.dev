import { PostContentRichText } from '@api'
import Image from 'next/image'
import React from 'react'
import { FlexBox } from './flex_box'

type ContentType = 'paragraph' | 'heading-three' | 'heading-four' | 'image'

type Props = {
  text?: Pick<PostContentRichText, 'json'>
}

export function PostRichText({ text }: Props) {
  if (!text) return <></>

  return (
    <FlexBox gap={32}>
      {text.json.children.map(
        (fragment: { children: any[]; type: string }, index: number) => {
          const children = fragment.children.map((item, itemIndex) =>
            renderFragment(itemIndex, item.text, item)
          )

          return renderFragment(
            index,
            children,
            fragment,
            fragment.type as ContentType
          )
        }
      )}
    </FlexBox>
  )
}

function renderFragment(
  index: number,
  text: any[],
  obj: any,
  type?: ContentType
) {
  let modifiedText: any = text

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>
    }
  }

  switch (type) {
    case 'heading-three':
      return (
        <h3 key={index}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h3>
      )

    case 'paragraph':
      return (
        <p key={index}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      )

    case 'heading-four':
      return (
        <h4 key={index}>
          {modifiedText.map((item: any, i: number) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h4>
      )

    case 'image':
      return (
        <Image
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      )

    default:
      return modifiedText
  }
}
