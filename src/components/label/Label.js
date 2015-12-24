import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import autobind from 'autobind-decorator'
import Text from './../text/Text'

class Label extends Component {
  static propTypes = {
    direction: PropTypes.node,
  }

  static defaultProps = {
    direction: 'left',
  }

  @style({
    self: {
      width: '100%',
      boxSizing: 'border-box',
      display: 'inline-block',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      verticalAlign: 'middle',
    },
    'direction=left': {
      textAlign: 'left',
    },
    'direction=right': {
      textAlign: 'right',
    },
  })
  render() {
    const { children, htmlFor } = this.props
    return (
      <label htmlFor={htmlFor}>
        <Text size='xsmall' color='gray500'>
          {children}
        </Text>
      </label>
    )
  }
}

export default Label
