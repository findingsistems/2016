import React, { Component, PropTypes } from 'react'
import autobind from 'autobind-decorator'
import Example from './Example'
import Editor from './Editor'
import StackTrace from './StackTrace'

@autobind
class Fence extends Component {
  static propTypes = {
    showEditor: PropTypes.bool,
    content: PropTypes.string,
  }

  static defaultProps = {
    showEditor: false,
  }

  constructor(props) {
    super()
    this.state = {
      content: props.content,
      error: null,
    }
  }

  componentWillReceiveProps(props) {
    if (props.content === this.props.content) return
    this.setState({ content: props.content })
  }

  onChange(content) {
    this.setState({ content })
  }

  onError(error) {
    this.setState({ error })
  }

  onSuccess(module) {
    const { info, onExampleChange } = this.props

    if (module && onExampleChange) {
      onExampleChange(info || module.name, module)
    }

    this.setState({ error: null })
  }

  renderExample() {
    const { requireContext, examplesContext } = this.props
    const { content } = this.state

    return (
      <Example
        content={content}
        context={requireContext}
        examplesContext={examplesContext}
        onError={this.onError}
        onSuccess={this.onSuccess} />
    )
  }

  renderEditor() {
    if (!this.props.showEditor) {
      return (
        <noscript />
      )
    }

    return (
      <Editor
        value={this.props.content}
        onChange={this.onChange} />
    )
  }

  renderStackTrace() {
    if (!this.state.error) {
      return (
        <noscript />
      )
    }

    return (
      <StackTrace>
        {this.state.error}
      </StackTrace>
    )
  }

  render() {
    return (
      <div>
        {this.renderExample()}
        {this.renderEditor()}
        {this.renderStackTrace()}
      </div>
    )
  }
}

export default Fence
