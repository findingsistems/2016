import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import VendorPrefix from 'react-vendor-prefix'

class Layout extends Component {
  static propTypes = {
    grow: PropTypes.number,
    shrink: PropTypes.number,
    basis: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    grow: 0,
    shrink: 0,
    basis: 'auto',
  }

  getStyles() {
    return VendorPrefix.prefix({
      styles: {
        flexGrow: this.props.grow,
        flexShrink: this.props.shrink,
        flexBasis: this.props.basis,
      },
    }).styles
  }

  @style({
    self: {
      display: 'flex',
      alignItems: 'stretch',
    },
    'border=top': {
      borderTop: '1px solid $color.gray200',
    },
    'border=right': {
      borderRight: '1px solid $color.gray200',
    },
    'border=bottom': {
      borderBottom: '1px solid $color.gray200',
    },
    'border=left': {
      borderLeft: '1px solid $color.gray200',
    },
  })
  render() {
    const { children } = this.props

    return (
      <div style={this.getStyles()}>
        {children}
      </div>
    )
  }
}

export default Layout
