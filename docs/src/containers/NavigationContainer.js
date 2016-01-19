import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as DocsActions from './../actions/DocsActions'
import Navigation from '../components/Navigation'

import { jss, useSheet } from 'jssStyle'
import componentStyles, { getStyleClass } from './NavigationContainer.jss.js'

@connect(state => {
  return {
    tokens: state.docs.navigationTokens,
  }
}, DocsActions)
class NavigationContainer extends Component {
  componentDidMount() {
    this.props.load()
  }

  render() {
    return (
      <div className = {getStyleClass(this.props)}>
        <Navigation
          tokens={this.props.tokens} />
      </div>
    )
  }
}

export default useSheet(NavigationContainer, componentStyles)
