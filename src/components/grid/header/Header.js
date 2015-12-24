import React, { Component, PropTypes } from 'react'
import createFragment from 'react-addons-create-fragment'
import style from 'quantum'
import Cell from './cell/Cell'

class Header extends Component  {
  static propTypes = {
    columns: PropTypes.object,
  }

  getProps(column) {
    return {
      style: {
        width: column.getCalculatedWidth(),
      },
    }
  }

  getContent(column) {
    return column.getHeader().title
  }

  renderCell(column) {
    const props = this.getProps(column)

    return (
      <Cell {...props}>
        {this.getContent(column)}
      </Cell>
    )
  }

  renderCells() {
    const cells = this.props.columns.reduce((result, column, index) => ({
      ...result,
      [`cell-${index}`]: this.renderCell(column),
    }), {})

    return createFragment(cells)
  }

  @style({
    self: {
      position: 'relative',
      borderCollapse: 'collapse',
      paddingLeft: '1px',
    },
  })
  render() {
    const { width } = this.props

    return (
      <div style={{width}}>
        <div style={{width}}>
          {this.renderCells()}
        </div>
      </div>
    )
  }
}

export default Header
