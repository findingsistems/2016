import React, { Component } from 'react'
import style from 'quantum'
import { connect } from 'react-redux'
import * as DocsActions from './../actions/DocsActions'
import Navigation from '../components/Navigation'

@connect(state => {
  return {
    tokens: state.docs.navigationTokens,
  }
}, DocsActions)
class NavigationContainer extends Component {
  componentDidMount() {
    this.props.load()
  }

  @style({
    self: {
      overflowY: 'auto',
      flexBasis: '20%',
      paddingLeft: '20px',
      borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    },
  })
  render() {
    return (
      <div>
        <Navigation
          tokens={this.props.tokens} />
      </div>
    )
  }
}

export default NavigationContainer
