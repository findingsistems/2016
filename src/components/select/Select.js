import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import style from 'quantum'
import autobind from 'autobind-decorator'
import size from './../../decorator/size'
import Text from './../text/Text'
import Input from './../input/Input'
import { ItemDropDown, DropDown } from './../dropdown'
import { Checkbox } from './../checkbox'
import CloseIcon from './../icons/CloseIcon'

@size({resize: true})
@autobind
class Select extends Component {
  static propTypes = {
    options: PropTypes.array,
    value: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    multiple: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    /* From decorator */
    calculatedWidth: PropTypes.number,
  }

  static defaultProps = {
    multiple: false,
    value: [],
  }

  constructor(props) {
    super()
    const { multiple, value } = props

    this.state = {
      isShowDropDown: false,
      value: Array.isArray(value) ? value : [value],
      isShrink: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { calculatedWidth, multiple } = this.props

    if (!multiple) return null
    const { offsetWidth } = findDOMNode(this.refs.container)
    const isShrink = offsetWidth > (calculatedWidth * 0.8)

    if (prevState.isShrink === isShrink) return null
    this.setState({isShrink})
  }

  onContainerClick(event) {
    const { isShowDropDown } = this.state

    this.setState({isShowDropDown: !isShowDropDown})
  }

  onSelectedItemClick(item, event) {
    this.handleItemClick(item)
  }

  onClose(isInsideClick, event) {
    const { multiple } = this.props

    if (isInsideClick && multiple) return null
    this.setState({isShowDropDown: false})
    // Добавить проверку на родителя что бы при клике по контейнеру с элементами вкладка не закрывалась
  }

  handleItemClick(item) {
    const { value } = this.state
    const { multiple, onChange } = this.props
    const selectedIndex = value.findIndex(el => el.value === item.value)

    let selected
    if (selectedIndex !== -1) {
      selected = [
        ...value.slice(0, selectedIndex),
        ...value.slice(selectedIndex + 1),
      ]
    } else {
      selected = multiple ? [...value, item] : [item]
    }

    this.setState({
      value: selected,
    })

    onChange && onChange(multiple ? selected : selected.shift())
  }

  @style({
    self: {
      display: 'block',
      position: 'relative',
      height: '25px',
      borderRadius: '1px',
      border: '1px solid $color.gray300',
      boxSizing: 'border-box',
      outline: 'none',
      color: '$color.black',
      fontFamily: '$font.family',
      fontSize: '$font.size.medium',
      overflow: 'hidden',
      cursor: 'context-menu',
      '& > *': {
        '-webkit-user-select': 'none',
        position: 'absolute',
        top: '0',
        left: '6px',
        bottom: '0',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        '& > * + *': {
          marginLeft: '10px',
        },
      },
    },
  })
  renderContainer(value, onClick, isShrink) {
    return (
      <div onClick={onClick}>
        <div ref='container'>
          {value.map(this.renderSelectedItem)}
        </div>
        {isShrink && this.renderShrinkContainer(value.length, onClick)}
      </div>
    )
  }

  @style({
    self: {
      right: '0',
    },
  })
  renderShrinkContainer(count, onClick) {
    return (
      <div>{`Выбрано: ${count}`}</div>
    )
  }

  @style({
    self: {
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
  })
  renderSelectedItem(item) {
    const { multiple } = this.props

    return (
      <div key={item.value} onClick={this.onSelectedItemClick.bind(this, item)}>
        {item.shortText || item.text} {multiple && <CloseIcon width='8' />}
      </div>
    )
  }

  renderDropDown(options, value, width, onClose) {
    return (
      <DropDown width={width} onClose={onClose} direction='left' align='left'>
        {this.renderDropDownItems(options, value)}
      </DropDown>
    )
  }

  renderDropDownItems(options, value) {
    const { multiple } = this.props

    return options.map(item => (
      <ItemDropDown  key={item.value} onClick={this.handleItemClick.bind(this, item)}>
        {multiple && <Checkbox checked={value.some(el => el.value === item.value)} />} {item.text}
      </ItemDropDown>)
    )
  }

  @style({
    self: {
      cursor: 'pointer',
      boxSizing: 'border-box',
    },
  })

  render() {
    const { subMenu, calculatedWidth, options } = this.props
    const { isShowDropDown, value, isShrink } = this.state

    return (
      <div>
        {this.renderContainer(value, this.onContainerClick, isShrink)}
        {isShowDropDown && calculatedWidth && this.renderDropDown(options, value, calculatedWidth, this.onClose)}
      </div>
    )
  }
}

export default Select
