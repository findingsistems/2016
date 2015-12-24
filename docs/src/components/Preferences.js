import React, { Component, PropTypes } from 'react'
import autobind from 'autobind-decorator'
import style from 'quantum'
import CodeIcon from 'scalex-ui/components/icons/CodeIcon'

@autobind
class Preferences extends Component {
  static propTypes = {
    onToggleEditor: PropTypes.func,
  }

  onToggleEditor() {
    this.props.onToggleEditor && this.props.onToggleEditor()
  }

  @style({
    self: {
      display: 'inline-block',
      cursor: 'pointer',
      padding: '5px',
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)',
      background: '#fff',
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.02)',
      },
    },
  })
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
      <div>
        {this.renderEditor()}
      </div>
    )
  }
}

export default Preferences
