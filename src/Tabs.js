import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v1'

import { deepForEach, deepMap } from './helpers/childrenDeepMap'
import { isTab, isTabList, isTabPanel } from './helpers/elementTypes'

const getTabsCount = (children) => {
  let tabCount = 0;

  deepForEach(children, child => {
    if (isTab(child)) {
      tabCount = tabCount + 1;
    }
  })

  return tabCount
}

export default class Tabs extends React.Component {
  getTabsCount() {
    return getTabsCount(this.props.children)
  }

  getChildren() {
    let index = 0

    this.tabIds = this.tabIds || [];
    this.panelIds = this.panelIds || [];

    let diff = this.tabIds.length - this.getTabsCount()

    while (diff++ < 0) {
      this.tabIds.push(uuid())
      this.panelIds.push(uuid())
    }

    return deepMap(this.props.children, child => {
      let result = child

      if (isTabList(child)) {
        let listIndex = 0;

        result = cloneElement(child, {
          children: deepMap(child.props.children, tab => {
            const key = `tabs-${listIndex}`
            
            const props = {
              tabRef: node => {
                this.tabNodes[key] = node
              },
              id: this.tabIds[listIndex],
              panelId: this.panelIds[listIndex],
            }

            listIndex++

            return cloneElement(tab, props)
          })
        })
      } else if (isTabPanel(child)) {
        const props = {
          id: this.panelIds[index],
          tabId: this.tabIds[index],
        }

        index++

        result = cloneElement(child, props)
      }

      return result
    })
  }

  render() {
    const tabList = [];
    const tabPanels = [];

    return (
      <div>
        {this.getChildren()}
      </div>
    );
  }
}
