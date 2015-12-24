import React, { Component, PropTypes } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import CSSPropertyOperations from 'react/lib/CSSPropertyOperations'
import autobind from 'autobind-decorator'

@autobind
class Portal extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    isActive: PropTypes.bool,
  }

  static defaultProps = {
    isActive: false,
  }

  constructor() {
    super()
    this.node = null
  }

  componentWillMount() {
    const { isActive } = this.props
    isActive && this.onPortalOpen()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive !== this.props.isActive) {
      nextProps.isActive ? this.onPortalOpen() : this.onPortalClose()
    }
  }

  componentWillUnmount() {
    this.onPortalClose()
  }

  onPortalOpen() {
    const { style, className, children } = this.props

    const node = document.createElement('div')
    className && (node.className = className)
    style && CSSPropertyOperations.setValueForStyles(node, style)
    document.body.appendChild(node)

    this.node = node
    ReactDOM.render(children, node)
  }

  onPortalClose() {
    if (this.node) {
      ReactDOM.unmountComponentAtNode(this.node)
      document.body.removeChild(this.node)
    }

    this.node = null
  }

  render() {
    return null
  }
}

export default Portal
