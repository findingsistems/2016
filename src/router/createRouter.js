export default function createRouter(history, transition) {
  let listeners = []

  function listen(listener) {
    listeners.push(listener)

    return function unlisten() {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  function orderScreens(screens = []) {
    return screens.sort((a, b) => {
      return (a.position.start + a.position.end) - (b.position.start + b.position.end)
    })
  }

  function navigateTo(location) {
    return transition(location).then(screens => {
      if (screens) {
        listeners.forEach(listener => listener([location, orderScreens(screens)]))
      }
    })
  }

  function start() {
    history.listen(location => navigateTo(location))
  }

  return {
    listen: listen,
    start: start,
  }
}
