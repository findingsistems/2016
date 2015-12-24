import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import autobind from 'autobind-decorator'
import style from 'quantum'
import { contentSize } from './../../utils/DOM'
import resizable from './../../decorator/resizable'
import { SCREEN_PADDING } from './Constants'
import Toolbar from './Toolbar'

@autobind
@resizable
class Workspace extends Component {
  static propTypes = {
    onTransition: PropTypes.func,
  }

  constructor() {
    super()
    this.state = {
      width: null,
      height: null,
      expanded: false,
    }
  }

  componentDidMount() {
    this.addResizeListener(findDOMNode(this), this.onResize)
  }

  componentWillUnmount() {
    this.removeResizeListener(findDOMNode(this), this.onResize)
  }

  getScreenTranslate(index) {
    if (!this.state.expanded) return null

    const { width } = this.state
    const { children } = this.props

    return `translate(${(width - 250) * index / React.Children.count(children)}px, 0)`
  }

  getScreenStyle(index) {
    const { width, height, expanded } = this.state
    const padding = index * SCREEN_PADDING

    return {
      zIndex: index + 1,
      paddingLeft: padding,
      width: width - padding,
      height: height,
      transform: this.getScreenTranslate(index),
    }
  }

  onResize() {
    this.setState(contentSize(findDOMNode(this)))
  }

  onExpand() {
    this.setState({ expanded: !this.state.expanded })
  }

  onPrevious() {
    if (!this.props.onTransition) return
    const children = React.Children.toArray(this.props.children)
    const previousIndex = children.length - 2
    this.props.onTransition(children[previousIndex], previousIndex)
  }

  onClick(screen, index) {
    this.props.onTransition && this.props.onTransition(screen, index)
    this.setState({ expanded: false })
  }

  renderChildren() {
    const { expanded } = this.state

    return React.Children.map(this.props.children, (screen, index) => {
      const props = { style: this.getScreenStyle(index) }

      if (expanded) {
        props.onClick = () => this.onClick(screen, index)
      } else {
        props.backdrop = index > 0
      }

      return React.cloneElement(screen, props)
    })
  }

  renderToolbar() {
    if (React.Children.count(this.props.children) < 2) {
      return (
        <noscript />
      )
    }

    return (
      <Toolbar onPrevious={this.onPrevious} onExpand={this.onExpand} />
    )
  }

  @style({
    self: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
    },
  })
  render() {
    return (
      <div>
        {this.renderChildren()}
        {this.renderToolbar()}
      </div>
    )
  }
}

export default Workspace
