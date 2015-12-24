import React, { Component, PropTypes } from 'react'
import { repeat } from 'ramda'

class Space extends Component {
  static propTypes = {
    length: PropTypes.number,
  }

  static defaultProps = {
    length: 1,
  }

  render() {
    const { length } = this.props

    return (
      <i>
        {repeat('\u00A0', length)}
      </i>
    )
  }
}

export default Space
