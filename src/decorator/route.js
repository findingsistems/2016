import React from 'react'
import { addTransition } from './../router/transitions'

function route(location) {
  return (target, name, descriptor) => {
    addTransition(location, (screen) => {
      return {
        component: React.createFactory(target),
        ...screen,
      }
    })

    return descriptor
  }
}

export default route
