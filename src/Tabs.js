import React from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends React.Component {
  render() {
    const tabList = [];
    const tabPanels = [];

    this.props.children.forEach((child) => {
      if (child.type.tabsRole === 'TabList') {
        tabList.push(child)
      } else {
        tabPanels.push(child)
      }
    })

    return (
      <div>
        <div>{tabList}</div>
        <div>{tabPanels}</div>
      </div>
    );
  }
}
