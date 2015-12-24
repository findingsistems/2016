import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import autobind from 'autobind-decorator'
import style from 'quantum'
import ace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/solarized_light'

@autobind
class Editor extends Component {
  static CODE_LINE_HEIGHT = 16

  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  }

  constructor() {
    super()
    this.state = {
      height: 150,
    }
  }

  componentDidMount() {
    this.editor = ace.edit(findDOMNode(this))

    this.editor.getSession().setOptions({
      mode: 'ace/mode/javascript',
      tabSize: 2,
      useSoftTabs: true,
    })

    this.editor.$blockScrolling = Infinity
    this.editor.setTheme('ace/theme/solarized_light')
    this.editor.setValue(this.props.value, { indent_size: 2 })
    this.editor.clearSelection()

    this.editor.on('change', this.onChange)

    this.setState({ height: this.getHeight() })
  }

  componentWillReceiveProps(props) {
    if (props.value === this.props.value) return
    if (props.value === this.editor.getValue()) return
    this.editor.setValue(props.value, { indent_size: 2 })
  }

  componentDidUpdate(props, state) {
    if (state.height === this.state.height) return
    this.editor.resize()
  }

  componentWillUnmount() {
    this.editor.destroy()
  }

  getHeight() {
    return this.editor.getValue().split('\n').length * Editor.CODE_LINE_HEIGHT
  }

  onChange() {
    this.setState({ height: this.getHeight() })
    this.props.onChange && this.props.onChange(this.editor.getValue())
  }

  render() {
    return (
      <div style={{height: this.state.height}} />
    )
  }
}

export default Editor
