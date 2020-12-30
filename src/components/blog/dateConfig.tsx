import { parseISO, format } from 'date-fns'
import { id, enUS } from 'date-fns/locale'

const Date = ({ dateString, locale }) => {
  const date = parseISO(dateString)
  const dateFormat = locale === 'id' ? 'd LLLL yyyy' : 'LLLL d yyyy'
  return <time dateTime={dateString}>{format(date, dateFormat, { locale: locale === 'id' ? id : enUS })}</time>
}

export default Date
