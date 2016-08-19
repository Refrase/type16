// Styles

import 'styles/base/reset.scss';
import 'styles/base/typography.scss';
import 'styles/utils/helpers.scss';
import 'styles/base/common.scss';
import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Components

import Header from 'components/Header';
import Menu from 'components/Menu';

// Utilities

// Constants

// Class

class App extends Component {

  constructor(props) {

    super(props);

  }

  // loadOverlay = Non-optimal way to hide load of giant SVG on load
  render() {

    const {
      children,
      dispatch,
      showingMenu,
    } = this.props;

    return (
      <div className="app">
        <Header dispatch={ dispatch } />
        <div className="loadOverlay"></div>
        { children }
        <Menu
          dispatch={ dispatch }
          showingMenu={ showingMenu } />
      </div>
    );

  }

}

// PropTypes

App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
  showingMenu: PropTypes.bool,
};

App.defaultProps = {

};

// Mapping

function mapStateToProps(state) {

  return {
    showingMenu: state.ui.menu.showingMenu,
  };

}

// Export

export default connect(mapStateToProps)(App);
