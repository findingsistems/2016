import React, { Component, PropTypes } from 'react'
import styles from 'quantum'
import Text from './../text/Text'

class Button extends Component {
  static propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    margin: PropTypes.string,
  }

  static defaultProps = {
    active: false,
    disabled: false,
  }

  getStyles() {
    const { margin, style } = this.props

    return {
      ...style,
      ...margin && {margin},
    }
  }

  @styles({
    self: {
      padding: '5px 15px',
      border: '1px solid $color.gray400',
      background: '$color.white',
      borderRadius: '1px',
      cursor: 'pointer',
      outline: 'none',
      '&:hover': {
        background: '$color.gray100',
        boxShadow: 'inset 1px 1px 5px $color.gray400',
      },
      '&:disabled': {
        opacity: '0.5',
        boxShadow: 'none',
        cursor: 'default',
      },
    },
    'active': {
      background: '$color.gray200',
    },
  })
  render() {
    const { children, disabled, onClick } = this.props
    return (
      <button disabled={disabled} style={this.getStyles()} onClick={onClick}>
        <Text size='small'>
          {children}
        </Text>
      </button>
    )
  }
}

export default Button
