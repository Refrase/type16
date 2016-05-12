// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';

// Components

import Nav from './../Nav';
import Icon from 'components/Icon';

// Utilities

// Constants

// Actions

import { openMenu } from 'ducks/ui/menu';

// Class

class Header extends Component {

  constructor(props) {

    super(props);

    this.openMenu = this.openMenu.bind(this);

  }

  openMenu(e) {

    e.preventDefault();

    openMenu(this.props.dispatch);

  }

  render() {

    return (
      <div className="header">
        <Icon which="burger" onClick={ this.openMenu } />
        <Nav />
      </div>
    );

  }

}

// PropTypes

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Header.defaultProps = {

};

// Export

export default Header;
