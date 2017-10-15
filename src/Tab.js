import React from 'react';
import PropTypes from 'prop-types';

export default class Tab extends React.Component {
  render() {
    return (
      <li role="tab">{this.props.children}</li>
    );
  }
}

Tab.tabsRole = 'Tab'
