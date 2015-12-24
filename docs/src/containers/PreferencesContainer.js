import React, { Component } from 'react'
import style from 'quantum'
import { connect } from 'react-redux'
import * as PreferencesActions from './../actions/PreferencesActions'
import Preferences from './../components/Preferences'

@connect(state => {
  return {
    preferences: state.preferences,
  }
}, PreferencesActions)
class PreferencesContainer extends Component {
  @style({
    self: {
      position: 'fixed',
      top: '0px',
      right: '30px',
      zIndex: '2',
    },
  })
  render() {
    const { toggleEditor, preferences } = this.props

    return (
      <div>
        <Preferences
          {...preferences}
          onToggleEditor={toggleEditor} />
      </div>
    )
  }
}

export default PreferencesContainer
