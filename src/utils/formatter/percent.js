import number from './number'

import {
  PERCENT_FORMAT,
  PERCENT_WITH_FRACTION_FORMAT,
} from './formats'

export default function percent(value) {
  return number(value, PERCENT_FORMAT)
}

export function percentWithFraction(value) {
  return number(value, PERCENT_WITH_FRACTION_FORMAT)
}
