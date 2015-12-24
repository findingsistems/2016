import React, { Component, PropTypes } from 'react'
import autobind from 'autobind-decorator'
import { findDOMNode } from 'react-dom'
import style from 'quantum'
import Portal from '../layer/Portal'
import { CloseIcon } from '../icons'

@autobind
class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onOutsideClick: PropTypes.func,
  }

  static defaultProps = {
    isOpen: false,
  }

  componentWillMount() {
    const { onOutsideClick } = this.props

    onOutsideClick && document.addEventListener('mousedown', this.onOutsideClick)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onOutsideClick)
  }

  onOutsideClick(event) {
    const { isOpen, onOutsideClick } = this.props
    const { target } = event

    if (!isOpen || findDOMNode(this.refs.modal).contains(target)) return null
    onOutsideClick && onOutsideClick()
  }

  @style({
    self: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 10,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'auto',
      '&:before': {
        content: '""',
        height: '100%',
        display: 'inline-block',
        verticalAlign: 'middle',
      },
      '& > *': {
        display: 'inline-block',
      },
    },
  })
  renderBackDrop(children) {
    return (
      <div>
        {this.renderModalContent(children)}
      </div>
    )
  }

  @style({
    self: {
      position: 'relative',
      padding: '15px 20px',
      margin: '15px 20px',
      verticalAlign: 'middle',
      backgroundColor: '#fff',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
      textAlign: 'left',
      whiteSpace: 'normal',
    },
  })
  renderModalContent(children) {
    return (
      <div ref='modal'>
        {this.renderCloseButton()}
        {children}
      </div>
    )
  }

  @style({
    self: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      fontSize: '1px',
      cursor: 'pointer',
    },
  })
  renderCloseButton() {
    const { onClose } = this.props

    return (
      <div onClick={onClose}>
        <CloseIcon width='9' />
      </div>
    )
  }

  @style({
    self: {
      overflow: 'auto',
      fontFamily: '$font.family',
    },
  })
  render() {
    const { children, isOpen } = this.props

    return (
      <Portal isActive={isOpen}>
        {this.renderBackDrop(children)}
      </Portal>
    )
  }
}

export default Modal
