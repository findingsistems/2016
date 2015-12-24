import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import style from 'quantum'
import hljs from 'highlight.js/lib/highlight'
import js from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/darkula.css'

hljs.registerLanguage('javascript', js)

class StackTrace extends Component {
  componentDidMount() {
    hljs.highlightBlock(findDOMNode(this.refs.code))
  }

  getContent() {
    return hljs.highlight('javascript', this.props.children).value
  }

  @style({
    self: {
      width: '100%',
      position: 'relative',
      overflow: 'auto',
      '& pre': {
        margin: '0px',
      },
    },
  })
  render() {
    return (
      <div>
        <pre>
          <code
            ref='code'
            dangerouslySetInnerHTML={{ __html: this.getContent() }} />
        </pre>
      </div>
    )
  }
}

export default StackTrace
