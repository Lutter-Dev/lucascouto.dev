import { Expanded, FlexBox } from '@ui'

export function IntroSection() {
  return (
    <FlexBox direction="row">
      <Expanded className="intro-primary">
        <FlexBox className="h-full" align="center" justify="center">
          <h1 className="intro-text">Developing products</h1>
          <div className="divider" />
          <h2 className="intro-text">not just code</h2>
        </FlexBox>
      </Expanded>
      <Expanded className="intro-secondary">
        <div className="logo" />
      </Expanded>
    </FlexBox>
  )
}
