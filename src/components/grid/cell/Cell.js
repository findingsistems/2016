import React, { Component, PropTypes } from 'react'
import style from 'quantum'

class Cell extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  renderContent() {
    return this.props.render ? this.props.render(this.props) : this.props.children
  }

  @style({
    self: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontSize: '13px',
      fontWeight: '400',
      fontFamily: '"Arial Regular", Arial',
      zoom: '1',
      textOverflow: 'ellipsis',
      verticalAlign: 'middle',
      textAlign: 'left',
      padding: '8px 10px',
      height: 'auto',
      ' div': {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
  })
  renderInner() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }

  @style({
    self: {
      overflow: 'hidden',
      verticalAlign: 'middle',
      borderColor: 'rgb(239, 239, 239)',
      borderWidth: '1px 0px',
      borderStyle: 'solid',
      borderCollapse: 'collapse',
      borderSpacing: '0',
    },
  })
  render() {
    return (
      <td>
        {this.renderInner()}
      </td>
    )
  }
}

export default Cell
