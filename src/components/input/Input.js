import React, { Component, PropTypes } from 'react'
import style from 'quantum'

class Input extends Component {
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.node,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    placeholder: PropTypes.node,
    hideBorder: PropTypes.oneOf(['left', 'right']),
    cursor: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
  }

  static defaultProps = {
    disabled: false,
    readOnly: false,
    type: 'text',
  }

  constructor(props) {
    super()
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.state = {
      value: props.value,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value === this.state.value) return null
    this.setState({
      value: nextProps.value,
    })
  }

  onClick(event) {
    const { onClick } = this.props

    onClick && onClick(event)
  }

  onChange(event) {
    const { onChange } = this.props
    const value = event.target.value

    this.setState({value})
    onChange && onChange(value)
  }

  onKeyDown(event) {
    const { onKeyDown } = this.props

    onKeyDown && onKeyDown(event)
  }

  @style({
    self: {
      width: '100%',
      display: 'inline-block',
      '& > input': {
        width: '100%',
        height: '25px',
        padding: '0px 6px',
        borderRadius: '1px',
        border: '1px solid $color.gray300',
        boxSizing: 'border-box',
        outline: 'none',
        color: '$color.black',
        fontFamily: '$font.family',
        fontSize: '$font.size.medium',
        textAlign: 'inherit',
      },
    },
    disabled: {
      '& > input': {
        background: '$color.white',
        opacity: '0.5',
      },
    },
    readOnly: {
      '-webkit-user-select': 'none',
    },
    'hideBorder=left': {
      '& > input': {
        borderLeft: 'none',
      },
    },
    'hideBorder=right': {
      '& > input': {
        borderRight: 'none',
      },
    },
    'cursor=pointer': {'& > input': {cursor: 'pointer'}},
    'cursor=contextMenu': {'& > input': {cursor: 'context-menu'}},
  })
  render() {
    const { value } = this.state
    const { disabled, readOnly, placeholder, type, name, id } = this.props

    return (
      <div>
        <input id={id}
               type={type}
               name={name}
               value={value}
               disabled={disabled}
               readOnly={readOnly}
               placeholder={placeholder}
               onClick={this.onClick}
               onKeyDown={this.onKeyDown}
               onChange={this.onChange} />
      </div>
    )
  }
}

export default Input
