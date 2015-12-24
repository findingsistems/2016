# Роутинг

*Пример конфигурации роутинга*

Создаем инстанс history.

```routerHistory
import { createMemoryHistory } from 'history'

export default createMemoryHistory()
```

Конфигурируем router.

```router
import createRouter from 'scalex-ui/router/createRouter'
import transitions from 'scalex-ui/router/transitions'
import history from './routerHistory'

export default createRouter(history, transitions)
```

Создаем reducers.

```reducers
import { combineReducers } from 'redux'
import { routerReducer as router } from 'redux-vstack-router'

export default combineReducers({
  router,
})
```

Настраиваем store.

```configureStore
import { createStore, applyMiddleware, compose } from 'redux'
import { historyMiddleware, createRouterListener } from 'redux-vstack-router'
import history from './routerHistory'
import router from './router'
import rootReducer from './reducers'

const finalCreateStore = compose(
  applyMiddleware(historyMiddleware(history))
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  router.listen(createRouterListener(store))

  return store
}
```

Создаем первый экран с ссылкой на второй.

```
import React, { Component } from 'react'
import route from 'scalex-ui/decorator/route'
import View from 'scalex-ui/components/view/View'
import Link from 'scalex-ui/components/link/Link'
import history from './routerHistory'

@route('/')
class FirstScreen extends Component {
  onClick() {
    history.pushState(null, '/second')
  }

  render() {
    return (
      <View>
        <div style={{ margin: 20 }}>
          <div>Первый экран</div>
          <Link onClick={this.onClick}>Перейти на второй экран</Link>
        </div>
      </View>
    )
  }
}

export default FirstScreen
```

Создаем второй экран.

```
import React, { Component } from 'react'
import route from 'scalex-ui/decorator/route'
import View from 'scalex-ui/components/view/View'
import Link from 'scalex-ui/components/link/Link'
import history from './routerHistory'

@route('/second')
class SecondScreen extends Component {
  onClick() {
    history.pushState(null, '/second/1')
  }

  render() {
    return (
      <View>
        <div style={{ margin: 20 }}>
          <div>Второй экран</div>
          <Link onClick={this.onClick}>Перейти на третий экран</Link>
        </div>
      </View>
    )
  }
}

export default SecondScreen
```

Создаем третий экран.

```
import React, { Component } from 'react'
import route from 'scalex-ui/decorator/route'
import View from 'scalex-ui/components/view/View'
import Link from 'scalex-ui/components/link/Link'
import history from './routerHistory'

@route('/second/:id')
class SecondDetailScreen extends Component {
  render() {
    return (
      <View>
        <div style={{ margin: 20 }}>
          Третий экран
        </div>
      </View>
    )
  }
}

export default SecondDetailScreen
```

Создаем пример роутинга.

```
import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import Workspace from 'scalex-ui/components/workspace/Workspace'
import Screen from 'scalex-ui/components/workspace/Screen'
import Field from 'scalex-ui/components/field/Field'
import Label from 'scalex-ui/components/label/Label'
import Input from 'scalex-ui/components/input/Input'
import configureStore from './configureStore'
import history from './routerHistory'
import router from './router'

@connect(state => {
  return {
    location: state.router.location || {},
    screens: state.router.screen || []
  }
})
class App extends Component {
  onTransition(screen, index) {
    history.pushState(null, this.props.screens[index].pathname)
  }

  onChange(value) {
    history.pushState({}, value)
  }

  renderScreen(screen, index) {
    return (
      <Screen key={index}>
        {screen.component()}
      </Screen>
    )
  }

  render() {
    const { location } = this.props

    return (
      <div>
        <div style={{ padding: '5px 12px', background: 'white' }}>
          <Field>
            <Label>URL</Label>
            <Input
              value={location.pathname}
              onChange={this.onChange} />
          </Field>
        </div>
        <div style={{ height: 300 }}>
          <Workspace onTransition={::this.onTransition}>
            {this.props.screens.map(this.renderScreen)}
          </Workspace>
        </div>
      </div>
    )
  }
}

const store = configureStore()

class RoutingExample extends Component {
  componentDidMount() {
    router.start()
  }

  render() {
    return (
      <div style={{ background: 'rgb(234, 234, 234)' }}>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    )
  }
}

export default RoutingExample
```
