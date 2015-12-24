import React, { Component, PropTypes } from 'react'
import style from 'quantum'

class ItemGroup extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
  }

  static defaultProps = {
    align: 'left',
  }

  @style({
    self: {
      display: 'inline-block',
      '& > *': {
        verticalAlign: 'middle',
      },
    },
    'align=right': {
      float: 'right',
    },
    'align=left': {
      float: 'left',
    },
  })
  render() {
    const { children } = this.props

    return (
      <span>
        { children }
      </span>
    )
  }
}

export default ItemGroup
