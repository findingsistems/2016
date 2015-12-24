import React, { Component } from 'react'
import style from 'quantum'

class Screen extends Component {
  @style({
    self: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-start',
      height: '100%',
    },
  })
  renderContainer() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }

  @style({
    self: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    'backdrop': {
      background: 'rgba(0, 0, 0, 0.06)',
    },
  })
  render() {
    const { style: styles, onClick } = this.props

    return (
      <div
        style={styles}
        onClick={onClick}>
          {this.renderContainer()}
      </div>
    )
  }
}

export default Screen
