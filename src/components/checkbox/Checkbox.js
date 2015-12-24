import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import autobind from 'autobind-decorator'

@autobind
class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
    disabled: false,
  }

  constructor(props) {
    super()
    this.state = {
      checked: props.checked,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked === this.state.checked) return
    this.setState({
      checked: nextProps.checked,
    })
  }

  onChange(event) {
    const { onChange } = this.props
    const checked = !this.state.checked
    this.setState({
      checked,
    })
    onChange && onChange(checked)
  }

  @style({
    self: {
      position: 'relative',
      width: '13px',
      height: '13px',
      border: '1px solid $color.gray300',
      display: 'inline-block',
      verticalAlign: 'text-bottom',
      '&:before': {
        transformOrigin: '80% 80%',
        width: '40%',
        content: '" "',
        height: '70%',
        position: 'absolute',
        borderBottom: '2px solid $color.gray500',
        borderRight: '2px solid $color.gray500',
        opacity: '0',
        transition: 'transform 0.2s, opacity 0.1s',
        '-webkit-backface-visibility': 'hidden',
      },
      '& > input': {
        opacity: '0',
        width: '100%',
        height: '100%',
        margin: '0',
        padding: '0',
      },
    },
    checked: {
      '&:before': {
        transform: 'rotate(45deg)',
        opacity: '1',
      },
    },
    disabled: {
      opacity: '0.5',
    },
  })
  render() {
    const { checked } = this.state
    const { id, disabled } = this.props
    return (
      <div>
        <input type='checkbox' id={id} checked={checked} disabled={disabled} onChange={this.onChange}/>
      </div>
    )
  }
}

export default Checkbox
