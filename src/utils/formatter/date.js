import moment from 'moment'
import { DATE_FORMAT } from './formats'

export default function date(value) {
  if (!value) return value

  return moment(value).format(DATE_FORMAT)
}
