import { Children, cloneElement } from 'react'
import { isTab, isTabList, isTabPanel, isTabChild } from './elementTypes'

export const deepForEach = (children, callback) => {
  return Children.forEach(children, child => {
    if (child === null) {
      return null
    }

    if (isTab(child) || isTabPanel(child)) {
      callback(child)
    } else if (
      child.props &&
      child.props.children &&
      typeof child.props.children === 'object') {
        if (isTabList(child)) callback(child)
        deepForEach(child.props.children, callback)
      }
  })
}

export const deepMap = (children, callback) => {
  return Children.map(children, child => {
    if (child === null) return null

    if (isTabChild(child)) {
      return callback(child)
    }

    if (
      child.props &&
      child.props.children &&
      typeof child.props.children === 'object'
    ) {
      return cloneElement(child, {
        children: deepMap(child.props.children, callback),
      });
    }

    return child;
  });
}