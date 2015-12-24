import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import Layout from './Layout'

class ColumnLayout extends Component {
/*  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.instanceOf(Layout),
      PropTypes.array,
    ]),
  }*/

  @style({
    self: {
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      width: '100%',
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

export default ColumnLayout
