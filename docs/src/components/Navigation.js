import React from 'react'
import { fromPairs } from 'ramda'
import { Link } from 'react-router'
import TokenRenderer from 'scalex-ui/components/docs/TokenRenderer'

import { jss, useSheet } from 'jssStyle'
import componentStyles, { getStyleClass } from './Preferences.jss.js'

class Navigation extends TokenRenderer {
  getLinkTarget(token) {
    return fromPairs(token.attrs).href
  }

  renderLink(token, children) {
    return (
      <Link to={this.getLinkTarget(token)}>
        {children}
      </Link>
    )
  }

  render() {
    const props = this.props

    return (
      <div className={getStyleClass(props)}>
        {this.renderTokens(this.props.tokens)}
      </div>
    )
  }
}

export default useSheet(Navigation, componentStyles)
