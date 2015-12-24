import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import Text from './../text/Text'

class ItemDropDown extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    direction: PropTypes.string,
  }

  static defaultProps = {
    border: true,
    direction: 'right',
  }

  @style({
    self: {
      cursor: 'pointer',
      padding: '8px 14px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      '-webkit-user-select': 'none',
      '&:hover': {
        background: '$color.gray100',
      },
      '& + &': {
        borderTop: '1px solid $color.gray200',
      },
    },
    'direction=left': {
      textAlign: 'left',
    },
    'direction=right': {
      textAlign: 'right',
    },
  })
  render() {
    const { onClick, children } = this.props

    return (
      <div onClick={onClick}>
        <Text color='gray500'>
          {children}
        </Text>
      </div>
    )
  }
}

export default ItemDropDown
