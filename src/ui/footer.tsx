import { FlexBox } from './flex_box'
import Link from 'next/link'

export function Footer() {
  return (
    <FlexBox className="footer">
      <div className="divider" />
      <FlexBox direction="row" justify="space-between" align="center">
        <p>© Lucas Couto 2023</p>
        <FlexBox direction="row" gap={16}>
          <Link
            href="https://www.linkedin.com/in/lucas-couto-45b35a74/"
            target="_blank"
          >
            <div className="icon linkedin" />
          </Link>
          <Link href="https://github.com/lucasarcouto" target="_blank">
            <div className="icon github" />
          </Link>
          <Link href="https://twitter.com/lucascoutodev" target="_blank">
            <div className="icon twitter" />
          </Link>
          <Link href="https://www.threads.net/@lucascoutodev" target="_blank">
            <div className="icon threads" />
          </Link>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}
