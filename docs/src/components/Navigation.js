import React from 'react'
import style from 'quantum'
import { fromPairs } from 'ramda'
import { Link } from 'react-router'
import TokenRenderer from 'scalex-ui/components/docs/TokenRenderer'

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

  @style({
    self: {
      '& p': {
        paddingLeft: '15px',
      },
      '& a': {
        textDecoration: 'none',
        lineHeight: '28px',
        fontSize: '14px',
        color: '#666',
        '&:hover': {
          color: '#f26b00',
        },
      },
    },
  })
  render() {
    return (
      <div>
        {this.renderTokens(this.props.tokens)}
      </div>
    )
  }
}

export default Navigation
