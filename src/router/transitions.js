import createTransition from './createTransition'

const transitions = {}

export function addTransition(location, handler) {
  transitions[location] = createTransition(location, handler)
}

export default function combinedTransition(location) {
  return new Promise((resolve, reject) => {
    const pages = []

    Object.keys(transitions).forEach((key) => {
      const transition = transitions[key]
      const page = transition(location)

      if (page) {
        pages.push(page)
      }
    })

    resolve(pages)
  })
}
