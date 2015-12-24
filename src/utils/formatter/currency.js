import number from './number'

import {
  CURRENCY_FORMAT,
  CURRENCY_WITH_NAME_FORMAT,
  CURRENCY_WITH_CODE_FORMAT,
  CURRENCY_RATE_FORMAT,
} from './formats'

export default function currency(value) {
  return number(value, CURRENCY_FORMAT)
}

export function currencyWithName(value, currencyName = 'RUB') {
  return number(value, { ...CURRENCY_WITH_NAME_FORMAT, currency: currencyName })
}

export function currencyWithCode(value, currencyName = 'RUB') {
  return number(value, { ...CURRENCY_WITH_CODE_FORMAT, currency: currencyName })
}

export function currencyRate(value) {
  return number(value, CURRENCY_RATE_FORMAT)
}
