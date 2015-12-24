import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import Text from './../text/Text'

class TabTitle extends Component {
  static propTypes = {
    active: PropTypes.bool,
  }

  @style({
    self: {
      display: 'inline-block',
      borderRadius: '1px 1px 0 0',
      marginBottom: '-2px',
      padding: '5px 12px',
      fontSize: '13px',
      borderBottom: 'none',
      border: '1px solid transparent',
      cursor: 'pointer',
    },
    active: {
      borderBottom: 'none',
      border: '1px solid $color.gray200',
      background: '$color.white',
      cursor: 'default',
    },
  })
  render() {
    const { children, onClick } = this.props
    return (
      <div onClick={onClick}>
        <Text>
          {children}
        </Text>
      </div>
    )
  }
}

export default TabTitle
