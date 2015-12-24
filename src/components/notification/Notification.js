import React, { Component, PropTypes } from 'react'
import autobind from 'autobind-decorator'
import { TransitionMotion, spring } from 'react-motion'
import style from 'quantum'
import Notice from './Notice'

@autobind
class Notification extends Component {
  static propTypes = {
    messages: PropTypes.object,
    onDismiss: PropTypes.func,
  }

  getStyles(elements = {}) {
    return Object.keys(elements)
      .reduce((acc, node) => {
        return {
          ...acc,
          [node]: {
            maxHeight: spring(300),
            opacity: spring(1),
            marginBottom: spring(10),
            data: elements[node],
          },
        }
      }, {})
  }

  onWillEnter(index) {
    return {
      maxHeight: spring(0),
      opacity: spring(0),
      marginBottom: spring(0),
      data: this.props.messages[index],
    }
  }

  onWillLeave(index, animation) {
    return {
      maxHeight: spring(0),
      opacity: spring(0),
      marginBottom: spring(0),
      data: animation.data,
    }
  }

  @style({
    self: {
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 10,
    },
  })
  renderAnimationBlock(elements) {
    const { onDismiss } = this.props

    return (
      <div>
        {Object.keys(elements).map(node => {
          const { data: { id, message }, ...styles } = elements[node] // eslint-disable-line no-redeclare

          return (
            <Notice styles={styles} key={id} onClick={onDismiss && onDismiss.bind(this, id)}>
              {message}
            </Notice>
          )
        })}
      </div>
    )
  }

  render() {
    const { messages } = this.props

    return (
      <TransitionMotion styles={this.getStyles(messages)} willEnter={this.onWillEnter} willLeave={this.onWillLeave}>
        {this.renderAnimationBlock}
      </TransitionMotion>
    )
  }
}

export default Notification

