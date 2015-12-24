import React, { Component } from 'react'
import style from 'quantum'

class ToolbarButton extends Component {
  @style({
    self: {
      display: 'block',
      marginBottom: '7px',
      padding: '6px',
      background: 'white',
      fontSize: '9px',
      borderRadius: '2px',
      cursor: 'pointer',
      '&:hover': {
        opacity: '0.9',
      },
    },
  })
  render() {
    const { onClick, children } = this.props

    return (
      <span
        onClick={onClick}>
          {children}
      </span>
    )
  }
}

export default ToolbarButton
