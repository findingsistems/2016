import React, { Component, PropTypes } from 'react'
import style from 'quantum'

class Notice extends Component {
  static propTypes = {
    styles: PropTypes.object,
    onClick: PropTypes.func,
  }

  @style({
    self: {
      position: 'relative',
      width: '250px',
      padding: '10px 15px',
      background: '$color.gray800',
      borderRadius: '3px',
      fontSize: '13px',
      color: '$color.gray100',
    },
  })
  renderNotice() {
    const { onClick, children } = this.props

    return (
      <div onClick={onClick}>
        {children}
      </div>
    )
  }

  render() {
    const { styles } = this.props

    return (
      <div style={styles}>
        {this.renderNotice()}
      </div>
    )
  }
}

export default Notice
