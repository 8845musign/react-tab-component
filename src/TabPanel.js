import React from 'react';
import PropTypes from 'prop-types';

export default class TabPanel extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

TabPanel.tabsRole = 'TabPanel'