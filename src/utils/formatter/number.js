import { is } from 'ramda'
import { NUMBER_FORMAT } from './formats'

const LOCALE = 'ru-RU'

export default function number(value, options) {
  if (!is(Number, value)) {
    return value
  }

  return (new Intl.NumberFormat(LOCALE, options || NUMBER_FORMAT)).format(value)
}
