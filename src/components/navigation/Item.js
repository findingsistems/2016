import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import autobind from 'autobind-decorator'
import Text from './../text/Text'

@autobind
class Item extends Component {
  static propTypes = {
    border: PropTypes.oneOf(['left', 'right', false]),
    onClick: PropTypes.func,
    subMenu: PropTypes.element,
  }

  static defaultProps = {
    border: 'right',
  }

  constructor() {
    super()
    this.state = {
      isShowMenu: false,
    }
  }

  onClick(event) {
    this.setState({
      isShowMenu: !this.state.isShowMenu,
    })
    this.props.onClick && this.props.onClick(event)
  }

  onMenuClose(event) {
    this.setState({
      isShowMenu: false,
    })
  }

  renderSubMenu(menu, onClose) {
    return React.cloneElement(menu, {
      onClose: onClose,
    })
  }

  @style({
    self: {
      padding: '15px',
      cursor: 'pointer',
      display: 'inline-block',
      position: 'relative',
      lineHeight: '14px',
      '-webkit-user-select': 'none',
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        background: '$color.gray100',
      },
    },
    'border=left': {
      borderLeft: '1px solid $color.gray200',
    },
    'border=right': {
      borderRight: '1px solid $color.gray200',
    },
  })
  render() {
    const { subMenu, children } = this.props
    const { isShowMenu } = this.state

    return (
      <span onClick={this.onClick}>
        <Text color='gray500'>
          {children}
        </Text>
        {subMenu && isShowMenu && this.renderSubMenu(subMenu, this.onMenuClose)}
      </span>
    )
  }
}

export default Item
