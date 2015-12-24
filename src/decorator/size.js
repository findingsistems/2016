import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

const size = ({resize = false}) => (WrappedComponent) => class extends Component {
  static displayName = (WrappedComponent.displayName || WrappedComponent.name || 'sizeDecorator')

  constructor() {
    super()
    this.onResize = this.onResize.bind(this)
    this.onCalculate = this.onCalculate.bind(this)
    this.state = {
      calculatedWidth: null,
      calculatedHeight: null,
    }
    this.timerId = null
  }

  onResize() {
    cancelAnimationFrame(this.timerId)
    this.timerId = requestAnimationFrame(this.onCalculate)
  }

  onCalculate() {
    const { calculatedWidth, calculatedHeight } = this.state
    const { offsetWidth, offsetHeight } = findDOMNode(this.refs.wrappedComponent)

    if (calculatedWidth === offsetWidth && calculatedHeight === offsetHeight) return null
    this.setState({
      calculatedWidth: offsetWidth,
      calculatedHeight: offsetHeight,
    })
  }

  componentDidMount() {
    resize && window.addEventListener('resize', this.onResize)
    setTimeout(this.onCalculate, 16)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  render() {
    return (
      <WrappedComponent ref='wrappedComponent' {...this.state} {...this.props} />
    )
  }
}

export default size
