import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import autobind from 'autobind-decorator'
import style from 'quantum'
import VendorPrefix from 'react-vendor-prefix'
import resizable from './../../decorator/resizable'
import { contentSize } from './../../utils/DOM'
import cloneChildrenWithAdditionalProps from './../../utils/reactHelpers/cloneChildrenWithAdditionalProps'

@resizable
class AutoLayout extends Component {
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

  constructor() {
    super()
    this.state = {
      width: null,
      height: null,
    }
  }

  componentDidMount() {
    this.addResizeListener(findDOMNode(this), this.onResize)
  }

  componentWillUnmount() {
    this.removeResizeListener(findDOMNode(this), this.onResize)
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

  @autobind
  onResize() {
    this.setState(contentSize(findDOMNode(this)))
  }

  @style({
    self: {
      position: 'relative',
    },
  })
  renderContent() {
    const { width, height } = this.state

    if (!width || !height) {
      return (
        <div/>
      )
    }

    return (
      <div>
        {this.renderWrapperContent()}
      </div>
    )
  }

  @style({
    self: {
      position: 'absolute',
      overflow: 'hidden',
    },
  })
  renderWrapperContent() {
    const { width, height } = this.state

    return (
      <div style={{ width, height }}>
        {this.renderChildren()}
      </div>
    )
  }

  renderChildren() {
    const { children } = this.props
    const { width, height } = this.state

    return cloneChildrenWithAdditionalProps(children, { width, height })
  }

  @style({
    self: {
      display: 'flex',
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
    return (
      <div style={this.getStyles()}>
        {this.renderContent()}
      </div>
    )
  }
}

export default AutoLayout
