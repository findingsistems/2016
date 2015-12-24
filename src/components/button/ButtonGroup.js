import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import autobind from 'autobind-decorator'
import cloneChildrenWithAdditionalProps from '../../utils/reactHelpers/cloneChildrenWithAdditionalProps'

class ButtonGroup extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    multiple: PropTypes.bool,
    selected: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.number,
    ]),
    margin: PropTypes.string,
  }

  static defaultProps = {
    multiple: false,
    selected: [],
  }

  constructor(props) {
    super()
    this.state = {
      selected: new Set([].concat(props.selected)),
    }
  }

  getStyles() {
    const { margin } = this.props
    return Object.assign({}, margin && {margin})
  }

  onChange(value) {
    const { selected } = this.state
    const { multiple, onChange } = this.props
    multiple && selected.has(value) ? selected.delete(value) : selected.add(value)
    !multiple && (selected.clear(), selected.add(value))

    this.setState({
      selected: selected,
    })
    onChange && onChange(multiple ? [...selected] : [...selected].shift())
  }

  renderButtons(children, selected) {
    return cloneChildrenWithAdditionalProps(children, child => ({
      group: true,
      active: selected.has(child.props.value),
      onClick: () => {this.onChange(child.props.value)},
    }))
  }

  @style({
    self: {
      display: 'inline-block',
      '& > *': {
        borderRadius: '0px',
        borderLeftWidth: '0px',
      },
      '& > *:first-child': {
        borderRadius: '1px 0 0 1px',
        borderLeftWidth: '1px',
      },
      '& > *:last-child': {
        borderRadius: '0 1px 1px 0',
      },
    },
  })
  render() {
    const { children } = this.props
    const { selected } = this.state
    return (
      <div style={this.getStyles()}>
        {this.renderButtons(children, selected)}
      </div>
    )
  }
}

export default ButtonGroup
