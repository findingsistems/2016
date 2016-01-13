import React, { Component, PropTypes } from 'react'
import { jss, useSheet } from 'jssStyle'

import * as autoGiperTheme from './../../styles/themes/ag'

const { agTheme, partsTheme, repairsTheme, catalogTheme, fonts } = autoGiperTheme

const componentStyles = {
  txtAg: agTheme.text,
}

class Text extends Component {
  static propTypes = {
    fontSize: PropTypes.string,
    color: PropTypes.string,
  }

  static defaultProps = {
    fontSize: '13px',
    color: 'black',
  }

  getStyle(props) {
    const { fontSize, color } = props

    return {
      ...color && {color: color},
      ...fontSize && {fontSize: fontSize},
    }
  }

  getStyleClass(props) {
    const { sheet } = props

    return sheet.classes.txtAg
  }

  render() {
    const { children, sheet, ...props } = this.props

    return (
      <span style={this.getStyle(this.props)} classNames={this.getStyleClass(this.props)}>
        {children}
      </span>
    )
  }
}

export default useSheet(Text, componentStyles)
