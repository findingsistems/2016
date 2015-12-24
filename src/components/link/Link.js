import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import autobind from 'autobind-decorator'
import Text from './../text/Text'

class Link extends Component {
  static propTypes = {
    margin: PropTypes.string,
  }

  getStyles() {
    const { margin } = this.props
    return Object.assign({}, margin && {margin})
  }

  @autobind
  onClick(event) {
    event.preventDefault()
    const {onClick, href} = this.props

    onClick ?
      onClick() :
      (window.location.href = href)
  }

  @style({
    self: {
      cursor: 'pointer',
      color: '$color.blue100',
      textDecoration: 'none',
      '&:hover': {
        color: '$color.blue200',
      },
    },
  })
  render() {
    const { size } = this.props

    return (
      <a href='#' {...this.props} style={this.getStyles()} onClick={this.onClick}>
        <Text size={size}>
          {this.props.children}
        </Text>
      </a>
    )
  }
}

export default Link
