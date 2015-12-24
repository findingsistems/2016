import React, { Component, PropTypes } from 'react'
import style from 'quantum'

class Tab extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Tab
