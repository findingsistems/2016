import React, { PropTypes } from 'react'

export default function withStyles(WrappedComponent) {
  return class extends WrappedComponent {
    static displayName = (WrappedComponent.displayName || WrappedComponent.name || 'withStylesDecorator')

    static propTypes = {
      width: PropTypes.string,
      height: PropTypes.string,
      padding: PropTypes.string,
      margin: PropTypes.string,
      display: PropTypes.oneOf(['inline', 'block', 'flex', 'inline-block', 'inline-flex']),
      alignSelf: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'baseline', 'stretch']),
      verticalAlign: PropTypes.oneOf(['middle', 'top', 'bottom', 'baseline']),
      textAlign: PropTypes.oneOf(['left', 'center', 'right']),
    }

    constructor(props) {
      super(props)
    }

    renderComponent() {
      const { width, height, padding, margin, display, alignSelf, verticalAlign, textAlign } = this.props
      const element = super.render()
      const ownStyles = element.props.styles || {}
      const mergeStyles = {
        ...ownStyles,
        ...width && {width, minWidth: width},
        ...height && {height},
        ...alignSelf && {alignSelf},
        ...verticalAlign && {verticalAlign},
        ...textAlign && {textAlign},
        ...display && {display},
        ...padding && {padding},
        ...margin && {margin},
      }

      return React.cloneElement(element, {style: mergeStyles})
    }

    render() {
      return this.renderComponent()
    }
  }
}
