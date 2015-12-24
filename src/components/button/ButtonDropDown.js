import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import autobind from 'autobind-decorator'
import Text from './../text/Text'
import Button from './Button'

@autobind
class ButtonDropDown extends Component {
  static propTypes = {
    dropDown: PropTypes.element,
    margin: PropTypes.string,
  }

  constructor() {
    super()
    this.state = {
      isShowDropDown: false,
    }
  }

  getStyles() {
    const { margin } = this.props
    return Object.assign({}, margin && {margin})
  }

  onClick(event) {
    this.setState({
      isShowDropDown: !this.state.isShowDropDown,
    })
  }

  onDropDownClose(event) {
    this.setState({
      isShowDropDown: false,
    })
  }

  renderDropDown(dropDown, onClose) {
    return React.cloneElement(dropDown, {
      onClose: onClose,
    })
  }
  @style({
    self: {
      display: 'inline-block',
    },
  })
  render() {
    const { children, dropDown } = this.props
    const { isShowDropDown } = this.state

    return (
      <span style={this.getStyles()}>
        <Button color='gray500' onClick={this.onClick}>
          {children}
        </Button>
        {dropDown && isShowDropDown && this.renderDropDown(dropDown, this.onDropDownClose)}
      </span>
    )
  }
}

export default ButtonDropDown
