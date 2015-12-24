import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import autobind from 'autobind-decorator'
import style from 'quantum'
import Layer from '../layer/Layer'

@autobind
class DropDown extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    onClose: PropTypes.func,
    direction: PropTypes.string,
    width: PropTypes.number,
  }

  static defaultProps = {
    align: 'left',
    direction: 'right',
  }

  constructor() {
    super()
    this.state = {
      calculatedWidth: null,
    }
  }

  componentDidMount() {
    const { calculatedWidth } = this.state
    const { offsetWidth } = findDOMNode(this.refs.root)

    this.setState({
      calculatedWidth: offsetWidth,
    })
  }

  onOutsideClick(event) {
    this.props.onClose && this.props.onClose(false, event)
  }

  onItemClick(item, event) {
    this.props.onClose && this.props.onClose(true, event)
    this.props.onClick && this.props.onClick(item)
    item.props.onClick && item.props.onClick(event)
  }

  @style({
    self: {
      background: '$color.white',
      boxShadow: '2px 2px 3px -1px $color.gray400',
      border: '1px solid $color.gray200',
      boxSizing: 'border-box',
    },
  })
  renderDropDownMenu(children, direction) {
    const { width } = this.props
    const { calculatedWidth } = this.state

    const styles = {
      ...(calculatedWidth && calculatedWidth < width) && {width},
    }

    return (
      <div ref='root' style={styles}>
        {this.renderDropDownItems(children, direction)}
      </div>
    )
  }

  renderDropDownItems(children, direction) {
    return React.Children.map(children, item => {
      return React.cloneElement(item, {
        onClick: this.onItemClick.bind(this, item),
        direction,
      })
    })
  }

  render() {
    const {children, direction} = this.props
    const align = this.props.align === 'right' ? 'tr-br' : 'tl-bl'

    return (
      <Layer align={align} onOutsideClick={this.onOutsideClick}>
        {this.renderDropDownMenu(children, direction)}
      </Layer>
    )
  }
}

export default DropDown
