import React, { Component, PropTypes } from 'react'
import style from 'quantum'

class View extends Component {
  static propTypes = {
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  @style({
    self: {
      position: 'absolute',
      background: '$color.white',
      boxShadow: '0px 3px 5px $color.gray400',
      border: '1px solid $color.gray400',
      borderRadius: '2px',
      margin: '12px 15px 12px 15px',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  })
  render() {
    const { width, height, children } = this.props

    return (
      <div style={{width, height}}>
        {children}
      </div>
    )
  }
}

export default View
