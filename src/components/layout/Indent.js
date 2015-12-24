import React, { Component, PropTypes } from 'react'

class Indent extends Component {
  static propTypes = {
    margin: PropTypes.string,
    padding: PropTypes.string,
    display: PropTypes.oneOf(['block', 'flex', 'inline-block', 'inline']),
    valign: PropTypes.string,
  }

  getStyles() {
    const { margin, padding, display, valign } = this.props
    return Object.assign({},
      margin && {margin},
      padding && {padding},
      display && {display},
      valign && {verticalAlign: valign}
    )
  }

  render() {
    const { children } = this.props

    return (
      <span style={this.getStyles()}>
        {children}
      </span>
    )
  }
}

export default Indent
