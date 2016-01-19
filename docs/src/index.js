import 'babel/polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-react-router'
import { Route } from 'react-router'
import fonts from 'google-fonts'
import store from './store'
import AppContainer from './containers/AppContainer'
import NavigationContainer from './containers/NavigationContainer'
import ContentContainer from './containers/ContentContainer'

import 'scalex-ui/components/link/Link'
import 'scalex-ui/components/icons/'
import 'scalex-ui/components/navigation/'
import 'scalex-ui/components/layout'
import 'scalex-ui/components/text/Text'

fonts.add({ Roboto: '400,300,300italic,400italic&subset=latin,cyrillic' })

class Docs extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Route path='/' component={AppContainer}>
            <Route path='*' component={ContentContainer} />
          </Route>
        </ReduxRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Docs />, document.getElementById('container'))
