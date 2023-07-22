import { BasicComment } from '@api'
import { FlexBox } from '@ui'
import { formatDate } from '@utils/date'
import parse from 'html-react-parser'
import { useTranslation } from 'next-i18next'

type Props = {
  comments?: BasicComment[]
}

export function Comments({ comments }: Props) {
  const { t } = useTranslation()

  return (
    <FlexBox className="comments">
      <h3 className="comments-title">
        {comments?.length} {t('comments')}
      </h3>
      {comments &&
        comments.length > 0 &&
        comments.map((comment) => (
          <div key={comment.createdAt} className="comment-item">
            <p>
              <span className="comment-name">{comment.name}</span>
              <span className="comment-date">
                {' '}
                {t('on')} {formatDate(comment.createdAt)}
              </span>
            </p>
            <p className="comment-content">{parse(comment.comment)}</p>
          </div>
        ))}
    </FlexBox>
  )
}
