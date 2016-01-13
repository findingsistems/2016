import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import { colors } from './../../styles'

class Icon extends Component {
  static SIZE = {
    width: 13,
    height: 13,
  }

  static propTypes = {
    originalWidth: PropTypes.number.isRequired,
    originalHeight: PropTypes.number.isRequired,
    valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    fill: PropTypes.oneOfType([
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    fill: colors.gray500,
  }

  getSize(width, height, ratio) {
    if (!width && !height) return Icon.SIZE
    if (width && height) return {width, height}
    return {
      ...width && {width, height: (width / ratio)},
      ...height && {width: (height * ratio), height},
    }
  }

  @style({
    'valign=top': {
      verticalAlign: 'top',
      alignSelf: 'flex-start',
    },
    'valign=middle': {
      verticalAlign: 'middle',
      alignSelf: 'center',
    },
    'valign=bottom': {
      verticalAlign: 'bottom',
      alignSelf: 'flex-end',
    },
  })
  render() {
    const { originalWidth, originalHeight, width, height, fill, children} = this.props
    const size = this.getSize(width, height, originalWidth / originalHeight)

    return (
      <svg {...size} fill={fill} viewBox={`0 0 ${originalWidth} ${originalHeight}`}>
        {children}
      </svg>
    )
  }
}

export default Icon
