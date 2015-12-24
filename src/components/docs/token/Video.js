import React, { Component } from 'react'
import { fromPairs } from 'ramda'

class Video extends Component {
  getAttributes() {
    return fromPairs(this.props.attrs)
  }

  render() {
    return (
      <video controls style={{maxWidth: '100%'}} {...this.getAttributes()} />
    )
  }
}

export default Video
