import React, { Component, PropTypes } from 'react'
import createFragment from 'react-addons-create-fragment'
import style from 'quantum'
import { is } from 'ramda'
import Cell from './../cell/Cell'

class Row extends Component {
  static propTypes = {
    columns: PropTypes.object,
  }

  renderCell(column) {
    const { entity } = this.props
    const cell = column.getCell()

    if (is(Function, cell)) {
      return cell(this.props)
    }

    return (
      <Cell>
        {entity[column.get('name')]}
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

  renderRow() {
    return (
      <tr>
        {this.renderCells()}
      </tr>
    )
  }

  @style({
    self: {
      outline: 'none',
      userSelect: 'none',
    },
  })
  render() {
    return (
      <tbody>
        {this.renderRow()}
      </tbody>
    )
  }
}

export default Row
