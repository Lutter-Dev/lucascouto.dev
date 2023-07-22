import { CheckBox, FlexBox } from '@ui'
import { useTranslation } from 'next-i18next'
import { FormEvent, useEffect, useRef, useState } from 'react'

type Props = {
  slug: string
}

export function CommentsForm({ slug }: Props) {
  const { t } = useTranslation()

  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const nameElement = useRef<HTMLInputElement>(null)
  const emailElement = useRef<HTMLInputElement>(null)
  const storeDataElement = useRef<HTMLInputElement>(null)

  useEffect(() => {
    nameElement.current &&
      (nameElement.current.value = window.localStorage.getItem('name') ?? '')
    emailElement.current &&
      (emailElement.current.value = window.localStorage.getItem('email') ?? '')
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setError(false)
    event.preventDefault()

    const data = event.target as typeof event.target & {
      name: { value: string }
      email: { value: string }
      comment: { value: string }
    }

    const name = data.name.value
    const email = data.email.value
    const comment = data.comment.value

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const storeData = storeDataElement.current?.checked ?? false
    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage?.setItem('email', email)
    } else {
      window.localStorage?.removeItem('name')
      window.localStorage?.removeItem('email')
    }

    try {
      await fetch('/api/comments', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, comment, slug })
      })

      const input = document.getElementById('comment') as HTMLInputElement
      input.value = ''

      setShowSuccessMessage(true)

      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form id="comments-form" className="comments-form" onSubmit={handleSubmit}>
      <h3 className="comments-form-title">{t('leave_reply')}</h3>
      <FlexBox className="comments-form-user-data" direction="row" gap={24}>
        <input
          ref={nameElement}
          type="text"
          placeholder={t('name')}
          name="name"
        />
        <input
          ref={emailElement}
          type="text"
          placeholder={t('email')}
          name="email"
        />
      </FlexBox>
      <textarea id="comment" placeholder={t('comment')} name="comment" />
      {error && <p className="error">{t('please_fill_fields')}</p>}
      <CheckBox
        reference={storeDataElement}
        id="storeData"
        label={t('save_name_email')}
      />
      <FlexBox align="center" gap={8}>
        <button className="btn-default" type="submit">
          {t('post_comment')}
        </button>
        {showSuccessMessage && (
          <span className="success-message">{t('comment_submitted_review')}</span>
        )}
      </FlexBox>
    </form>
  )
}
