import { path } from 'ramda'

class Column {
  constructor(options = {}) {
    this.options = options
  }

  get(name = '') {
    return path(name.split('.'), this.options)
  }

  getHeader() {
    return this.get('header')
  }

  getCell() {
    return this.get('cell')
  }

  calculate(width, flex) {
    if (this.getWidth() !== 0) {
      return
    }

    this.calculatedWidth = Math.floor(width * this.getFlex() / flex)
  }

  getFlex() {
    return this.options.flex || 0
  }

  getWidth() {
    return this.options.width || this.options.size || 0
  }

  getHeaderWidth() {
    return this.getCalculatedWidth() + 1
  }

  setCalculatedWidth(calculatedWidth) {
    this.calculatedWidth = calculatedWidth
  }

  getCalculatedWidth() {
    return this.calculatedWidth || this.getWidth()
  }
}

export default Column
