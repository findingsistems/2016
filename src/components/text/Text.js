import React, { Component, PropTypes } from 'react'
import style from 'quantum'

class Text extends Component {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
  }

  static defaultProps = {
    size: 'medium',
  }

  @style({
    self: {
      display: 'inline-block',
      fontFamily: '$font.family',
    },
    'size=xsmall': {
      fontSize: '$font.size.xsmall',
    },
    'size=small': {
      fontSize: '$font.size.small',
    },
    'size=medium': {
      fontSize: '$font.size.medium',
    },
    'size=large': {
      fontSize: '$font.size.large',
    },
    'size=xlarge': {
      fontSize: '$font.size.xlarge',
    },
    'size=xxlarge': {
      fontSize: '$font.size.xxlarge',
    },
    'color=gray500': {color: '$color.gray500'},
    'color=blue100': {color: '$color.blue100'},
    'color=blue200': {color: '$color.blue200'},
  })
  render() {
    const { children } = this.props

    return (
      <span>
        {children}
      </span>
    )
  }
}

export default Text
