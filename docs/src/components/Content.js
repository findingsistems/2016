import React, { PropTypes } from 'react'
import style from 'quantum'
import TokenRenderer from 'scalex-ui/components/docs/TokenRenderer'

class Content extends TokenRenderer {
  static propTypes = {
    scrollTo: PropTypes.string,
    showEditor: PropTypes.bool,
    tokens: PropTypes.array,
  }

  requireContext(module) {
    const contextMap = {
      'react': require.context('react', false),
      'scalex-ui': require.context('scalex-ui', true, /^(?!.*?__tests__).*$/),
      'redux': require.context('redux/lib'),
      'react-redux': require.context('react-redux/lib', true, /^(?!.*?native).*$/),
      'redux-vstack-router': require.context('redux-vstack-router/dist'),
      'history': require.context('history/lib'),
    }

    const contextName = module.split('/').shift()

    if (!contextMap[contextName]) {
      throw new Error(`Cannot find module ${module}`)
    }

    const targetContext = contextMap[contextName]
    const requireName = module.replace(`${contextName}`, '.')

    if (targetContext.keys().indexOf(`${requireName}/index`) !== -1) {
      return targetContext(`${requireName}/index`)
    }

    if (targetContext.keys().indexOf(`${requireName}/${module}`) !== -1) {
      return targetContext(`${requireName}/${module}`)
    }

    return targetContext(requireName)
  }

  @style({
    self: {
      padding: '10px 50px 25px 50px',
    },
  })
  renderChildren() {
    const { tokens } = this.props

    return (
      <div>
        {this.renderTokens(tokens)}
      </div>
    )
  }

  @style({
    self: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflowY: 'auto',
    },
  })
  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    )
  }
}

export default Content
