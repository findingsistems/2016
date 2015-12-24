import React, { Component, PropTypes } from 'react'
import style from 'quantum'

class ContentBlock extends Component {
  static propTypes = {
    padding: PropTypes.string,
  }

  @style({
    self: {
      width: '100%',
    },
    'border=top': {
      borderTop: '1px solid #efefef',
    },
    'border=right': {
      borderRight: '1px solid #efefef',
    },
    'border=bottom': {
      borderBottom: '1px solid #efefef',
    },
    'border=left': {
      borderLeft: '1px solid #efefef',
    },
  })
  render() {
    const { padding, children } = this.props

    return (
      <div style={{ padding }}>
        {children}
      </div>
    )
  }
}

export default ContentBlock
