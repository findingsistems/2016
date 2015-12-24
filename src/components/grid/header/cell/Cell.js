import React, { Component } from 'react'
import style from 'quantum'

class Cell extends Component {
  @style({
    self: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      paddingRight: '15px',
    },
  })
  renderContent() {
    const { children } = this.props

    return (
      <div>
        <span>
          {children}
        </span>
      </div>
    )
  }

  @style({
    self: {
      position: 'relative',
      overflow: 'hidden',
      fontSize: '11px',
      fontWeight: '400',
      textAlign: 'left',
      cursor: 'pointer',
      textOverflow: 'ellipsis',
      padding: '5px',
      zIndex: '1',
    },
  })
  renderWrapper() {
    return (
      <div>
        <div>
          {this.renderContent()}
        </div>
      </div>
    )
  }

  @style({
    self: {
      position: 'relative',
      display: 'inline-block',
      color: '#7F7F7F',
      fontFamily: '"Arial Regular", Arial',
      userSelect: 'none',
    },
  })
  render() {
    const { style: styles } = this.props

    return (
      <div style={styles}>
        {this.renderWrapper()}
      </div>
    )
  }
}

export default Cell
