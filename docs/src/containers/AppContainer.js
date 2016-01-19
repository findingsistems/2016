import React, { Component, PropTypes } from 'react'
import autobind from 'autobind-decorator'
import NavigationContainer from './NavigationContainer'
import PreferencesContainer from './PreferencesContainer'

import { jss, useSheet } from 'jssStyle'
import componentStyles, { getStyleClass, getContentContainerStyle } from './AppContainer.jss.js'

@autobind
class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  renderContentContainer() {
    const {...props} = this.props

    return (
      <div className={getStyleClass({...props, isContainer: true})}>
        {this.props.children}
      </div>
    )
  }

  render() {
    const {...props} = this.props

    return (
      <div className={getStyleClass(props)}>
        <NavigationContainer />
        <PreferencesContainer />
        {this.renderContentContainer()}
      </div>
    )
  }
}

export default useSheet(AppContainer, componentStyles)
