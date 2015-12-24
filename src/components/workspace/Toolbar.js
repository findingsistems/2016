import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import ToolbarButton from './ToolbarButton'
import ArrowLeftIcon from './../icons/ArrowLeftIcon'
import ListIcon from './../icons/ListIcon'

class Toolbar extends Component {
  static propTypes = {
    onPrevious: PropTypes.func,
    onExpand: PropTypes.func,
  }

  @style({
    self: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '22px',
      height: '100%',
      padding: '20px 4px 0 4px',
      background: 'rgba(0, 0, 0, 0.2)',
      zIndex: '999',
    },
  })
  render() {
    const { onPrevious, onExpand } = this.props

    return (
      <div>
        <ToolbarButton onClick={onPrevious}>
          <ArrowLeftIcon width={10} height={10} />
        </ToolbarButton>
        <ToolbarButton onClick={onExpand}>
          <ListIcon width={10} height={10} />
        </ToolbarButton>
      </div>
    )
  }
}

export default Toolbar
