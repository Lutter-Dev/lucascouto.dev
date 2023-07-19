import { Expanded, FlexBox } from '@ui'

type Props = {
  id?: string
}

export function IntroSection({ id }: Props) {
  return (
    <FlexBox id={id} direction="row">
      <Expanded className="intro-primary">
        <FlexBox className="h-full" align="center" justify="center">
          <h1 className="intro-text">Developing products</h1>
          <div className="intro divider" />
          <h2 className="intro-text">not just code</h2>
        </FlexBox>
      </Expanded>
      <Expanded className="intro-secondary">
        <div className="logo" />
      </Expanded>
    </FlexBox>
  )
}
