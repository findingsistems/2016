import React, { Component, PropTypes } from 'react'
import autobind from 'autobind-decorator'
import CodeIcon from 'scalex-ui/components/icons/CodeIcon'

import { jss, useSheet } from 'jssStyle'
import componentStyles, { getStyleClass } from './Preferences.jss.js'

@autobind
class Preferences extends Component {
  static propTypes = {
    onToggleEditor: PropTypes.func,
  }

  onToggleEditor() {
    this.props.onToggleEditor && this.props.onToggleEditor()
  }

  renderEditor() {
    return (
      <span onClick={this.onToggleEditor}>
        <CodeIcon
          width='18'
          height='18' />
      </span>
    )
  }

  render() {
    return (
      <div className={getStyleClass(this.props)}>
        {this.renderEditor()}
      </div>
    )
  }
}

export default useSheet(Preferences, componentStyles)
