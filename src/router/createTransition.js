import matchRoutePattern from './matchRoutePattern'

export default function createTransition(pattern, handler) {
  return function transition(location) {
    const screen = matchRoutePattern(pattern, location.pathname + location.search)

    if (!screen) {
      return null
    }

    return handler(screen, location)
  }
}
