import React from 'react'

export default function(children, params) {
  return React.Children.map(children, (child, index) => {
    return React.isValidElement(child) ?
      React.cloneElement(child, (params instanceof Function) ? params(child, index) : params) :
      child
  })
}