import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import { jss, useSheet } from 'jssStyle'

import Text from './../text/Text'

import * as autoGiperTheme from './../../styles/themes/ag'
const { agTheme, partsTheme, repairsTheme, catalogTheme } = autoGiperTheme

const componentStyles = {
  btnAg: agTheme.button,
  btnParts: partsTheme.button,
  btnRepair: repairsTheme.button,
  btnCatalog: catalogTheme.button,

  modRound: agTheme.round,
  modRoundLeft: agTheme.roundLeft,
  modRoundRight: agTheme.roundRight,
}

class Button extends Component {
  static propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    margin: PropTypes.string,
  }

  static defaultProps = {
    active: false,
    disabled: false,
  }

  getStyleClass(props) {
    const {
      sheet: {
        classes: {
          btnAg,
          btnParts,
          btnRepair,
          btnCatalog,
          modRound,
          modRoundLeft,
          modRoundRight,
        },
      },
      parts,
      repairs,
      catalog,
      round,
      roundLeft,
      roundRight,
    } = props

    const styleNames = cx({
      [btnAg]: (parts || repairs),
      [btnParts]: parts,
      [btnRepair]: repairs,
      [btnCatalog]: catalog,
      [modRound]: round,
      [modRoundLeft]: roundLeft,
      [modRoundRight]: roundRight,
    })

    return styleNames
  }

  getColorFromThemes(props) {
    const { parts, repairs, catalog } = props

    if (props.color) {
      return props.color
    }

    if (parts) {
      return partsTheme.button.color
    }

    if (repairs) {
      return repairsTheme.button.color
    }

    if (catalog) {
      return catalogTheme.button.color
    }

    return agTheme.button.color
  }

  render() {
    const { children, disabled, onClick, ...props} = this.props

    const color = this.getColorFromThemes(props)

    const fontSize = props.fontSize || agTheme.button.fontSize

    return (
      <button disabled={disabled} className={this.getStyleClass(this.props)} onClick={onClick}>
        <Text fontSize={fontSize} color={color}>
          {children}
        </Text>
      </button>
    )
  }
}

export default useSheet(Button, componentStyles)
