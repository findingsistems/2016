import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import autobind from 'autobind-decorator'
import NavigationContainer from './NavigationContainer'
import PreferencesContainer from './PreferencesContainer'

@autobind
class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  @style({
    self: {
      flexBasis: '80%',
      height: '100%',
    },
  })
  renderContentContainer() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

  @style({
    self: {
      display: 'flex',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '300',
      overflow: 'hidden',
    },
  })
  render() {
    return (
      <div>
        <NavigationContainer />
        <PreferencesContainer />
        {this.renderContentContainer()}
      </div>
    )
  }
}

export default AppContainer
