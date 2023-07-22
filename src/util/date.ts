import moment from 'moment'

type DateFormat = 'MMM DD, YYYY'

export function formatDate(date: string, format?: DateFormat) {
  return moment(date).format(format ?? 'MMM DD, YYYY')
}
