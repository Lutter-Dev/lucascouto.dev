import { FlexBox } from '@ui'
import { FormEvent, useState } from 'react'

type Props = {
  id?: string
}

export function ContactSection({ id }: Props) {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      name: { value: string }
      email: { value: string }
      message: { value: string }
    }

    const name = target.name.value
    const email = target.email.value
    const message = target.message.value

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      })

      if (response.status == 200) {
        setSubmitted(true)
      } else {
        alert(
          'An error occurred while submitting your message :(\n\nPlease try again.'
        )
      }
    } catch (e: any) {
      console.error('e: ', e)
    }
  }

  return (
    <FlexBox id={id} className="contact">
      {submitted ? (
        <FlexBox className="thank-you" justify="center" align="center">
          <h1>Thank you for your message!</h1>
          <br />
          <h2>I&apos;ll get back to you as soon as possible!</h2>
        </FlexBox>
      ) : (
        <FlexBox className="content" justify="center" align="center">
          <h2>Get in touch with me</h2>
          <br />
          <br />
          <p>Got any questions, a proposal or only want to say hi?</p>
          <p>Just fill the form below, I would love to talk to you!</p>
          <br />
          <br />
          <form className="form" onSubmit={handleSubmit}>
            <FlexBox direction="row" gap={32}>
              <FlexBox className="field">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </FlexBox>
              <FlexBox className="field">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </FlexBox>
            </FlexBox>
            <br />
            <FlexBox className="field">
              <label htmlFor="message">Message:</label>
              <input type="text" id="message" name="message" required />
            </FlexBox>
            <br />
            <button className="btn-default" type="submit">
              Send message
            </button>
          </form>
        </FlexBox>
      )}
    </FlexBox>
  )
}
