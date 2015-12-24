import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import { RowLayout, Layout } from './../layout/index'
import Columns from './column/Columns'
import Header from './header/Header'
import Body from './body/Body'

class Grid extends Component {
  static propTypes = {
    entities: PropTypes.array,
    columns: PropTypes.array,
  }

  static defaultProps = {
    entities: [],
  }

  componentWillMount() {
    const { columns, width } = this.props
    this.setState({columns: this.getColumns(columns, width) })
  }

  componentWillReceiveProps(props) {
    if (props.columns !== this.props.columns) {
      this.setState({columns: this.getColumns(props.columns, props.width) })
    }

    if (props.width !== this.props.width) {
      this.state.columns.calculate(props.width - this.props.columns.length)
      this.setState({columns: this.state.columns})
    }
  }

  getColumns(columns, width) {
    const result = new Columns(columns)
    result.calculate(width - columns.length)
    return result
  }

  renderHeader() {
    return (
      <Header width={this.props.width} columns={this.state.columns} />
    )
  }

  renderBody() {
    return (
      <Body
        ref='body'
        width={this.props.width}
        entities={this.props.entities}
        columns={this.state.columns} />
    )
  }

  @style({
    self: {
      background: 'white',
      position: 'relative',
      minHeight: '100%',
      width: '100%',
    },
  })
  render() {
    return (
      <div>
        <RowLayout>
          <Layout>
            {this.renderHeader()}
          </Layout>
          <Layout grow={1}>
            {this.renderBody()}
          </Layout>
        </RowLayout>
      </div>
    )
  }
}

export default Grid
