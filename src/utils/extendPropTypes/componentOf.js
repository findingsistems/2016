import chainableCheck from 'chainable-check'

export default function componentOf(...types) {
  function validate(props, propName, componentName) {
    if (!types.every(el => Boolean(el))) {
      throw new Error(`Invalid argument supplied to ${componentName} componentOf, expected an component.`)
    }

    const children = Array.isArray(props[propName]) ? props[propName] : [props[propName]]

    if (!children.every(el => types.includes(el.type))) {
      throw new Error(`Wrong propTypes(${propName}): component(${componentName})`)
    }

    return null
  }

  return chainableCheck(validate)
}
