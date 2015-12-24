import React, { Component } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import Tether from 'tether'
import autobind from 'autobind-decorator'
import { expose } from './utils/attachment'

@autobind
class Layer extends Component {
  static defaultProps = {
    align: 'tl-bl',
  }

  componentDidMount() {
    const element = document.createElement('div')
    document.body.appendChild(element)

    let { target } = this.props
    const { align } = this.props
    const [attachment, targetAttachment] = expose(align)

    if (!target) {
      target = findDOMNode(this).parentNode
    }

    const options = {
      element,
      target,
      attachment,
      targetAttachment,
    }

    this.layer = new Tether(options)

    ReactDOM.render(this.props.children, this.layer.element)

    if (this.props.onOutsideClick) {
      document.addEventListener('click', this.onOutsideClick)
    }

    this.layer.enable()
  }

  componentWillReceiveProps(props) {
    let options = this.layer.options

    if (props.align !== this.props.align) {
      const [attachment, targetAttachment] = expose(props.align)

      options = {
        ...options,
        attachment,
        targetAttachment,
      }
    }

    if (options !== this.layer.options) {
      this.layer.setOptions(options)
      this.layer.position()
    }

    if (props.children !== this.props.children) {
      ReactDOM.render(props.children, this.layer.element)
    }
  }

  componentWillUnmount() {
    this.layer.destroy()

    if (this.layer.element) {
      ReactDOM.unmountComponentAtNode(this.layer.element)
      document.body.removeChild(this.layer.element)
    }

    if (this.props.onOutsideClick) {
      document.removeEventListener('click', this.onOutsideClick)
    }
  }

  onOutsideClick(event) {
    const { target } = event

    if (!this.layer.element.contains(target)) {
      this.props.onOutsideClick(event)
    }
  }

  render() {
    return (
      <noscript />
    )
  }
}

export default Layer
