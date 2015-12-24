import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as DocsActions from './../actions/DocsActions'
import Content from '../components/Content'

@connect(state => {
  return {
    location: state.router.location.pathname,
    scrollTo: state.router.location.query.scrollTo,
    showEditor: state.preferences.showEditor,
    tokens: state.docs.tokens,
  }
}, DocsActions)
class ContentContainer extends Component {
  static propTypes = {
    location: PropTypes.string,
    scrollTo: PropTypes.string,
    showEditor: PropTypes.bool,
    tokens: PropTypes.array,
  }

  componentDidMount() {
    this.onLoadDoc(this.props.location)
  }

  componentWillReceiveProps(props) {
    if (props.location !== this.props.location) {
      this.onLoadDoc(props.location)
    }
  }

  onLoadDoc(location) {
    if (location !== '/') {
      this.props.loadDoc(location)
    }
  }

  render() {
    const { scrollTo } = this.props

    return (
      <Content
        scrollTo={scrollTo}
        tokens={this.props.tokens}
        showEditor={this.props.showEditor} />
    )
  }
}

export default ContentContainer
