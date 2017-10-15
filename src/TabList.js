import React from 'react';
import PropTypes from 'prop-types';

export default class TabList extends React.Component {
  render() {
    return (
      <ul role="tablist">{this.props.children}</ul>
    );
  }
}

TabList.tabsRole = 'TabList'
