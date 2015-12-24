import React, { Component, PropTypes } from 'react'
import style from 'quantum'
import { RowLayout, Layout } from '../layout/'
import componentOf from '../../utils/extendPropTypes/componentOf'
import TabTitle from './TabTitle'
import Tab from './Tab'

class Tabs extends Component {
  static propTypes = {
    children: componentOf(Tab),
  }

  constructor() {
    super()
    this.state = {
      active: null,
    }
  }

  getTabActive(active, title, index) {
    return (!Boolean(active) && index === 0) || (title === active)
  }

  onHeaderItemClick(title) {
    this.setState({
      active: title,
    })
  }

  @style({
    self: {
      borderBottom: '1px solid $color.gray200',
      width: '100%',
    },
  })
  renderTabsHeader(children, active) {
    return (
      <div>
        {React.Children.map(children, this.renderTabsHeaderItem(active))}
      </div>
    )
  }

  renderTabsHeaderItem(active) {
    return (child, index) => {
      const { title } = child.props
      const isActive = this.getTabActive(active, title, index)
      return (
        <TabTitle key={title} active={isActive} onClick={this.onHeaderItemClick.bind(this, title)}>
          {title}
        </TabTitle>
      )
    }
  }

  @style({
    self: {
      width: '100%',
      height: '100%',
      background: '$color.white',
    },
  })
  renderTabsPanel(children, active) {
    return (
      <div>
        {React.Children.map(children, this.renderTabsPanelItem(active))}
      </div>
    )
  }

  renderTabsPanelItem(active) {
    return (child, index) => {
      const { children: content, title } = child.props
      const isActive = this.getTabActive(active, title, index)
      return isActive && content
    }
  }

  render() {
    const { children } = this.props
    const { active } = this.state
    return (
      <RowLayout>
        <Layout>
          {this.renderTabsHeader(children, active)}
        </Layout>
        <Layout grow={1}>
          {this.renderTabsPanel(children, active)}
        </Layout>
      </RowLayout>
    )
  }
}

export default Tabs
