import React, { Component } from 'react'
import style from 'quantum'

class Table extends Component {
  @style({
    self: {
      borderCollapse: 'collapse',
      fontSize: '10px',
      tableLayout: 'fixed',
      whiteSpace: 'nowrap',
      margin: '0',
      border: 'none',
    },
  })
  render() {
    const { style: styles, children } = this.props

    return (
      <table style={styles}>
        {children}
      </table>
    )
  }
}

export default Table
