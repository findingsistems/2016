import Column from './Column'

class Columns {
  constructor(columns = []) {
    this.columns = columns
    this.items = columns.map(options => new Column(options))
  }

  calculate(width) {
    if (width) {
      this.lastWidth = width
    }

    const totalFlex = this.getTotalFlex()
    const calculationWidth = (width || this.lastWidth) - this.getConfiguredWidth()

    this.items.forEach(column => column.calculate(calculationWidth, totalFlex))
  }

  getTotalFlex() {
    return this.items.reduce((total, column) => {
      return total + column.getFlex()
    }, 0)
  }

  getConfiguredWidth() {
    return this.items.reduce((total, column) => {
      return total + column.getWidth()
    }, 0)
  }

  forEach(...args) {
    args.unshift(this.items)
    return Array.forEach.apply(Array, args)
  }

  reduce(...args) {
    args.unshift(this.items)
    return Array.reduce.apply(Array, args)
  }
}

export default Columns
