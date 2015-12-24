import React, { Component, PropTypes } from 'react'
import createFragment from 'react-addons-create-fragment'
import style from 'quantum'
import Table from './../table/Table'
import Row from './../row/Row'

class Body extends Component {
  static propTypes = {
    entities: PropTypes.array,
    columns: PropTypes.object,
  }

  renderColGroupCol(column) {
    return (
      <col style={{width: column.getCalculatedWidth()}} />
    )
  }

  renderColGroup() {
    const columns = this.props.columns.reduce((result, column, index) => ({
      ...result,
      [`col-${index}`]: this.renderColGroupCol(column),
    }), {})

    return (
      <colgroup>
        {createFragment(columns)}
      </colgroup>
    )
  }

  renderRow(entity) {
    const { columns } = this.props

    return (
      <Row entity={entity} columns={columns} />
    )
  }

  renderRows(entities = []) {
    const rows = entities.reduce((result, entity, index) => ({
      ...result,
      [`row-${index}`]: this.renderRow(entity),
    }), {})

    return createFragment(rows)
  }

  renderTable() {
    const { width, entities } = this.props

    return (
      <Table style={{width}}>
        {this.renderColGroup()}
        {this.renderRows(entities)}
      </Table>
    )
  }

  @style({
    self: {
      position: 'absolute',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
  })
  renderContainer() {
    const { width, height } = this.props

    return (
      <div ref='container' style={{width, height}}>
        {this.renderTable()}
      </div>
    )
  }

  @style({
    self: {
      height: '100%',
    },
  })
  render() {
    const { width, height } = this.props

    return (
      <div style={{width, height}}>
        {this.renderContainer()}
      </div>
    )
  }
}

export default Body
