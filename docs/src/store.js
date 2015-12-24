import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerStateReducer, reduxReactRouter } from 'redux-react-router'
import createHistory from 'history/lib/createHashHistory'
import persistState from 'redux-localstorage'
import reduxCatchPromise from 'redux-catch-promise'
import Preferences from './reducers/Preferences'
import Docs from './reducers/Docs'

const catchPromise = reduxCatchPromise()

const reducer = combineReducers({
  router: routerStateReducer,
  preferences: Preferences,
  docs: Docs,
})

const store = compose(
  applyMiddleware(catchPromise),
  reduxReactRouter({ createHistory }),
  persistState('preferences')
)(createStore)(reducer)

export default store
