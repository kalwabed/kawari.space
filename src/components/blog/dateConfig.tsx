import { parseISO, format } from 'date-fns'
import { id } from 'date-fns/locale'

const Date = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'd LLLL yyyy', { locale: id })}</time>
}

export default Date
