import React, { Component, PropTypes } from 'react'
import createFragment from 'react-addons-create-fragment'
import autobind from 'autobind-decorator'
import style from 'quantum'
import Fence from './token/fence/Fence'
import Heading from './token/Heading'
import Link from './token/Link'
import Image from './token/Image'
import Video from './token/Video'

class TokenRenderer extends Component {
  static propTypes = {
    scrollTo: PropTypes.string,
    showEditor: PropTypes.bool,
    tokens: PropTypes.array,
  }

  static defaultProps = {
    showEditor: true,
    tokens: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      examplesContext: {},
    }
  }

  getRenderMethod(token) {
    return `render${token.type.charAt(0).toUpperCase()}${token.type.slice(1)}`.replace('_', '')
  }

  @autobind
  onExampleChange(name, module) {
    const examplesContext = this.state.examplesContext
    examplesContext[name] = module
    this.setState({examplesContext})
  }

  renderTokens(tokens = [], level = 0) {
    const result = {}
    const nextLevel = level + 1

    tokens.forEach((token, index) => {
      result[`${level}.${index}`] =
        this.renderToken(token, token.children && this.renderTokens(token.children, nextLevel))
    })

    return createFragment(result)
  }

  renderParagraph(token, children) {
    return (
      <p>
        {children}
      </p>
    )
  }

  renderInline(token, children) {
    return (
      <span>{children}</span>
    )
  }

  renderEm(token, children) {
    return (
      <em>{children}</em>
    )
  }

  renderText(token) {
    return (
      <span>{token.content}</span>
    )
  }

  renderCodeinline(token) {
    return (
      <code>{token.content}</code>
    )
  }

  @style({
    self: {
      margin: '15px 0px',
      padding: '10px 15px',
      background: '$color.gray100',
    },
  })
  renderBlockquote(token, children) {
    return (
      <blockquote>{children}</blockquote>
    )
  }

  renderSoftbreak() {
    return (
      <br/>
    )
  }

  renderStrong(token, children) {
    return (
      <strong>{children}</strong>
    )
  }

  renderImage(token) {
    return (
      <Image {...token} />
    )
  }

  renderVideo(token) {
    return (
      <Video {...token} />
    )
  }

  renderLink(token, children) {
    return (
      <Link {...token}>
        {children}
      </Link>
    )
  }

  renderHeading(token, children) {
    const { scrollTo } = this.props

    return (
      <Heading {...token} scrollTo={scrollTo}>
        {children}
      </Heading>
    )
  }

  renderFence(token, children) {
    const { showEditor } = this.props
    const { examplesContext } = this.state

    return (
      <Fence
        {...token}
        showEditor={showEditor}
        examplesContext={examplesContext}
        requireContext={this.requireContext}
        onExampleChange={this.onExampleChange}>
          {children}
      </Fence>
    )
  }

  renderToken(token, children) {
    const renderMethod = this.getRenderMethod(token)

    if (!this[renderMethod]) {
      throw new Error('Component must implement render method for token')
    }

    return this[renderMethod](token, children)
  }

  render() {
    const { tokens } = this.props

    return (
      <div>
        {this.renderTokens(tokens)}
      </div>
    )
  }
}

export default TokenRenderer
