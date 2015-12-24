import React, { Component } from 'react'
import { fromPairs } from 'ramda'

class Image extends Component {
  getAttributes() {
    return fromPairs(this.props.attrs)
  }

  render() {
    return (
      <img style={{maxWidth: '100%'}} {...this.getAttributes()} />
    )
  }
}

export default Image
