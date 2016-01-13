import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as PreferencesActions from './../actions/PreferencesActions'
import Preferences from './../components/Preferences'

import { jss, useSheet } from 'jssStyle'
import componentStyles, { getStyleClass } from './PreferencesContainer.jss.js'

@connect(state => {
  return {
    preferences: state.preferences,
  }
}, PreferencesActions)
class PreferencesContainer extends Component {
  render() {
    const { toggleEditor, preferences, ...props } = this.props

    return (
      <div className = {getStyleClass(props)}>
        <Preferences
          {...preferences}
          onToggleEditor={toggleEditor} />
      </div>
    )
  }
}

export default useSheet(PreferencesContainer, componentStyles)
