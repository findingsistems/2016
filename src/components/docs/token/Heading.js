import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import autobind from 'autobind-decorator'
import style from 'quantum'
import { fromPairs } from 'ramda'

@autobind
class Heading extends Component {
  static defaultProps = {
    tag: 'h3',
  }

  constructor(props) {
    super(props)
    this.state = {
      showAnchor: false,
    }
  }

  componentDidMount() {
    this.onScrollTo(this.props.scrollTo)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scrollTo !== this.props.scrollTo) {
      this.onScrollTo(nextProps.scrollTo)
    }
  }

  getAttributes() {
    if (this.props.attrs) {
      return fromPairs(this.props.attrs)
    }
  }

  getId() {
    const attrs = this.getAttributes()
    return attrs ? attrs.id : null
  }

  getAnchorHref() {
    const target = `scrollTo=${this.getId()}`
    let path = window.location.href

    if (path.indexOf('?') !== -1) {
      path = path.substr(0, path.indexOf('?'))
    }

    return `${path}?${target}`
  }

  onScrollTo(target) {
    if (target && target === this.getId()) {
      setTimeout(() => {
        findDOMNode(this).scrollIntoView()
      }, 50)
    }
  }

  onMouseEnter() {
    this.setState({showAnchor: true})
  }

  onMouseLeave() {
    this.setState({showAnchor: false})
  }

  renderChildren(attrs) {
    const { children } = this.props
    const { showAnchor } = this.state

    if (!attrs || !showAnchor) {
      return children
    }

    return [
      children,
      this.renderAnchor(attrs),
    ]
  }

  @style({
    self: {
      cursor: 'pointer',
      marginLeft: '6px',
      color: 'inherit',
      opacity: '0.4',
      '&:hover': {
        opacity: '1',
      },
    },
  })
  renderAnchor(attrs) {
    return (
      <a key='#' href={this.getAnchorHref()}>#</a>
    )
  }

  @style({
    self: {
      fontWeight: '400',
    },
  })
  render() {
    const attrs = this.getAttributes()

    return React.createElement(
      this.props.tag,
      {
        ...this.props,
        className: this.getClassName(),
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        ...attrs,
      },
      this.renderChildren(attrs)
    )
  }
}

export default Heading
