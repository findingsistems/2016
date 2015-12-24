import React, { Component, PropTypes } from 'react'
import autobind from 'autobind-decorator'
import DayPicker from 'react-day-picker'
import { LocaleUtils } from 'react-day-picker/lib/addons'
import { isBetween, isSameDay } from './utils'

import 'moment/locale/ru'
import './styles.css'

@autobind
class Calendar extends Component {
  static propTypes = {
    selected: PropTypes.shape({
      from: PropTypes.instanceOf(Date),
      to: PropTypes.instanceOf(Date),
    }),
    range: PropTypes.bool,
    onChange: PropTypes.func,
  }

  getSelectedDays(from, to) {
    return {
      selected: (day) => {
        return (from && isSameDay(day, from)) ||
          (to && isSameDay(day, to)) ||
          (from && to && isBetween(day, from, to))
      },
    }
  }

  onDayClick(event, day) {
    let { selected: {from, to} } = this.props
    const { range, onChange } = this.props
    if (!from) {
      from = day
    } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
      from = null
      to = null
    } else if (to && day < from) {
      from = day
    } else if (to && isSameDay(day, to)) {
      from = day
      to = day
    } else {
      to = day
      if (to < from) {
        to = from
        from = day
      }
    }
    const selected = {
      from: range ? from : day,
      to: range ? to : null,
    }

    onChange && onChange(selected)
  }

  render() {
    const { selected: {from, to}, range } = this.props

    const config = {
      numberOfMonths: range ? 2 : 1,
      locale: 'ru',
      localeUtils: LocaleUtils,
      enableOutsideDays: true,
      modifiers: this.getSelectedDays(from, to),
      onDayClick: this.onDayClick,
    }

    return (
      <DayPicker {...config} />
    )
  }
}

export default Calendar
