/* eslint-disable no-new-func */
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import style from 'quantum'
import babel from 'babel-core/browser'

class Example extends Component {
  static propTypes = {
    context: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    content: PropTypes.string,
  }

  componentDidMount() {
    this.onExampleChange(this.props.content)
  }

  componentWillReceiveProps(props) {
    if (props.content === this.props.content) return
    this.onExampleChange(props.content)
  }

  shouldComponentUpdate() {
    return false
  }

  onExampleChange(content) {
    const { examplesContext } = this.props

    try {
      const code = babel(content, {
        stage: 0,
        blacklist: ['strict'],
        loose: ['es6.modules'],
        jsxPragma: 'React.createElement',
      }).code.split('\n')

      const context = module => {
        if (module.indexOf('./') === 0) {
          const name = module.replace('./', '')
          if (examplesContext[name]) return examplesContext[name]
        }

        return this.props.context(module)
      }

      const isReactComponent = module => {
        return module.prototype && module.prototype.isReactComponent
      }

      const exports = {}
      const execute = new Function(`return (function(require, exports, module) {${code.join('')}})`)
      execute().call(null, context, exports, {})

      if (exports && isReactComponent(exports.default)) {
        ReactDOM.unmountComponentAtNode(this.refs.container)
        ReactDOM.render(React.createElement(exports.default), this.refs.container)
      }

      this.props.onSuccess(exports.default)
    } catch (error) {
      this.props.onError(error.stack)
    }
  }

  @style({
    self: {
      border: '1px solid $color.gray200',
    },
  })
  render() {
    return (
      <div ref='container' />
    )
  }
}

export default Example
