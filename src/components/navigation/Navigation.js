import React, { Component } from 'react'
import style from 'quantum'

class Navigation extends Component {
  @style({
    self: {
      borderBottom: '1px solid $color.gray200',
      background: '$color.white',
      position: 'relative',
      zIndex: '0',
      '&:after': {
        visibility: 'hidden',
        display: 'block',
        content: '" "',
        clear: 'both',
        height: '0',
      },
      '& > *': {
        display: 'inline-block',
      },
    },
  })
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Navigation
