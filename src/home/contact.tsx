import { FlexBox } from '@ui'
import { useTranslation } from 'next-i18next'
import { FormEvent, useState } from 'react'

type Props = {
  id?: string
}

export function ContactSection({ id }: Props) {
  const [submitted, setSubmitted] = useState(false)

  const { t } = useTranslation()

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
          <h1>{t('thank_you_message')}</h1>
          <br />
          <h2>{t('get_back_asap')}</h2>
        </FlexBox>
      ) : (
        <FlexBox className="content" justify="center" align="center">
          <h2>{t('get_in_touch')}</h2>
          <br />
          <br />
          <p>{t('contact_form_1')}</p>
          <p>{t('contact_form_2')}</p>
          <br />
          <br />
          <form className="form" onSubmit={handleSubmit}>
            <FlexBox className="user-data" direction="row" gap={32}>
              <FlexBox className="field">
                <label htmlFor="name">{t('name')}:</label>
                <input type="text" id="name" name="name" required />
              </FlexBox>
              <FlexBox className="field">
                <label htmlFor="email">{t('email')}:</label>
                <input type="email" id="email" name="email" required />
              </FlexBox>
            </FlexBox>
            <br />
            <FlexBox className="field">
              <label htmlFor="message">{t('message')}:</label>
              <textarea id="message" name="message" rows={4} required />
            </FlexBox>
            <br />
            <button className="btn-default" type="submit">
              {t('send_message')}
            </button>
          </form>
        </FlexBox>
      )}
    </FlexBox>
  )
}
