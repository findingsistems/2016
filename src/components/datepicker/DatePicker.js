import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import autobind from 'autobind-decorator'
import moment from 'moment'
import { path } from 'ramda'
import Calendar from './Calendar'
import { Input } from '../input/'
import Layer from '../layer/Layer'
import { Button } from '../button/'

@autobind
class DatePicker extends Component {
  static propTypes = {
    selected: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.shape({
        from: PropTypes.instanceOf(Date),
        to: PropTypes.instanceOf(Date),
      }),
    ]),
    range: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    range: false,
  }

  constructor(props) {
    super()
    this.state = {
      selected: this.getInitialSelected(props.selected),
      isCalendarShow: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected === this.state.selected || !Boolean(nextProps.selected)) return null
    this.setState({
      selected: this.getInitialSelected(nextProps.selected),
    })
  }

  getTextInput(from, to) {
    const emptyDate = `__.__.____`
    const textFrom = from ? moment(from).format('L') : emptyDate
    const textTo = to ? moment(to).format('L') : emptyDate
    return to ?
      `${textFrom} - ${textTo}` :
      `${textFrom}`
  }

  getInitialSelected(selected) {
    return {
      from: path(['from'], selected) || selected,
      to: path(['to'], selected),
    }
  }

  onChange(selected) {
    const { range } = this.props

    this.setState({
      selected,
    }, () => !Boolean(range) && this.onSelected())
  }

  onSelected() {
    const { onChange, range } = this.props
    const { selected } = this.state
    const value = range ? selected : selected.from

    onChange && onChange(value)
    this.onClose(false)
  }

  onClick() {
    this.setState({
      isCalendarShow: !this.state.isCalendarShow,
    })
  }

  onClose(clean = true) {
    this.setState({
      isCalendarShow: false,
      ...clean && {selected: this.getInitialSelected(this.props.selected)},
    })
  }

  renderCalendarLayer(range, selected) {
    return (
      <Layer align='tl-bl' onOutsideClick={this.onClose}>
        {this.renderCalendar(range, selected)}
      </Layer>
    )
  }

  @style({
    self: {
      background: '$color.white',
      boxShadow: '2px 2px 3px -1px $color.gray400',
      border: '1px solid $color.gray200',
      padding: '15px',
    },
  })
  renderCalendar(range, selected) {
    return (
      <div>
        <Calendar range={range} selected={selected} onChange={this.onChange} />
        {range && this.renderButton()}
      </div>
    )
  }

  renderButton() {
    return (
      <Button onClick={this.onSelected}>
        Выбрать
      </Button>
    )
  }

  render() {
    const { range } = this.props
    const { isCalendarShow, selected: {from, to} } = this.state

    return (
      <div>
        <Input value={this.getTextInput(from, to)} onClick={this.onClick} cursor='contextMenu' readOnly />
        {isCalendarShow && this.renderCalendarLayer(range, {from, to})}
      </div>
    )
  }
}

export default DatePicker
