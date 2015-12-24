import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import styles from 'quantum'

class Layout extends Component {
  static defaultProps = {
    flex: true,
  }

  constructor() {
    super()
    this.onCalculate = this.onCalculate.bind(this)
    this.state = {
      isInit: false,
      width: null,
      height: null,
    }
  }

  componentDidMount() {
    const { freeze } = this.props
    const { isInit } = this.state

    if (!freeze) return null
    !isInit && setTimeout(this.onCalculate, 16)
  }

  getStyles() {
    const { style, basis, grow, justify, padding, margin, align, freeze } = this.props
    const { width, height } = this.state

    return {
      ...style,
      ...(width && freeze !== 'height') && {width, maxWidth: width},
      ...(height && freeze !== 'width') && {height, maxHeight: height},
      ...basis && {flexBasis: basis},
      ...grow && {flexGrow: grow},
      ...justify && {justifyContent: justify},
      ...align && {alignItems: align},
      ...padding && {padding},
      ...margin && {margin},
    }
  }

  onCalculate() {
    const { width, height } = this.state
    const { offsetWidth, offsetHeight } = findDOMNode(this)

    if (width === offsetWidth && height === offsetHeight) return null
    this.setState({
      width: offsetWidth,
      height: offsetHeight,
      isInit: true,
    })
  }

  @styles({
    self: {boxSizing: 'border-box'},
    'fullHeight': {height: '100%'},
    'vertical': {flexDirection: 'column'},
    'flex': {display: 'flex'},
    'block': {display: 'block'},
    'inlineFlex': {display: 'inline-flex'},
    'hidden': {overflow: 'hidden'},
    'verticalSpaceBetween=5': {'& > * + *': {marginTop: '5px'}},
    'verticalSpaceBetween=10': {'& > * + *': {marginTop: '10px'}},
    'verticalSpaceBetween=15': {'& > * + *': {marginTop: '15px'}},
    'verticalSpaceBetween=20': {'& > * + *': {marginTop: '20px'}},
    'horizontalSpaceBetween=5': {'& > * + *': {marginLeft: '5px'}},
    'horizontalSpaceBetween=10': {'& > * + *': {marginLeft: '10px'}},
    'horizontalSpaceBetween=15': {'& > * + *': {marginLeft: '15px'}},
    'horizontalSpaceBetween=20': {'& > * + *': {marginLeft: '20px'}},
    'border=top': {
      borderTop: '1px solid $color.gray200',
    },
    'border=right': {
      borderRight: '1px solid $color.gray200',
    },
    'border=bottom': {
      borderBottom: '1px solid $color.gray200',
    },
    'border=left': {
      borderLeft: '1px solid $color.gray200',
    },
    'demo=1': {
      backgroundColor: 'blue',
      opacity: '.8',
      border: '1px solid #fff',
      color: '#fff',
    },
    'demo=2': {
      backgroundColor: '#8C0094',
      opacity: '.8',
      border: '1px solid #fff',
      color: '#fff',
    },
    'demo=3': {
      backgroundColor: '#026F06',
      opacity: '.8',
      border: '1px solid #fff',
      color: '#fff',
    },
  })
  render() {
    const { freeze, children } = this.props
    const { isInit } = this.state
    const isShow = freeze ? isInit : true

    return (
      <div style={this.getStyles()}>
        {isShow && children}
      </div>
    )
  }
}

Layout.propTypes = {
  style: PropTypes.object,
  stretch: PropTypes.bool,
  basis: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  grow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  spaceBetween: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  justify: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  align: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'baseline', 'stretch']),
  freeze: PropTypes.oneOf(['all', 'width', 'height']),
  padding: PropTypes.string,
  margin: PropTypes.string,
  border: PropTypes.string,
  fullHeight: PropTypes.bool,
  block: PropTypes.bool,
  flex: PropTypes.bool,
  inlineFlex: PropTypes.bool,
  vertical: PropTypes.bool,
  hidden: PropTypes.bool,
  verticalSpaceBetween: PropTypes.string,
  horizontalSpaceBetween: PropTypes.string,
}

export default Layout
