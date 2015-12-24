import React, { Component } from 'react'
import { fromPairs } from 'ramda'

class Link extends Component {
  getAttributes() {
    return fromPairs(this.props.attrs)
  }

  render() {
    return (
      <a {...this.getAttributes()}>
        {this.props.children}
      </a>
    )
  }
}

export default Link
