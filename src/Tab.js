import React from 'react'
import PropTypes from 'prop-types'
export default class Tab extends React.Component {
  render() {
    return (
      <li
        id={this.props.id}
        role="tab"
        ref={node => {
          this.node = node

          if (this.props.tabRef) this.props.tabRef(node)
        }}
        aria-controls={this.props.panelId}
      >
        {this.props.children}
      </li>
    );
  }
}

Tab.propTypes = {
  id: PropTypes.string,
  panelId: PropTypes.string,
  tabRef: PropTypes.func,
}

Tab.defaultProps = {
  id: null,
  panelId: null,
  tabRef: null,
}

Tab.tabsRole = 'Tab'
