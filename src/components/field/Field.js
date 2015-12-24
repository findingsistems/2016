import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import withStyles from '../../decorator/withStyles'

@withStyles
class Field extends Component {
  @style({
    self: {
      boxSizing: 'border-box',
      width: '100%',
      '& > * + *': {
        marginTop: '5px',
      },
    },
  })
  render() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Field
