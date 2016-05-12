// Styles

import './index.scss';

// Libraries

import React, { Component } from 'react';
import { Link } from 'react-router';

// Components

// Utilities

// Constants

// Class

class Nav extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    return (
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    );

  }

}

// PropTypes

Nav.propTypes = {

};

Nav.defaultProps = {

};

// Export

export default Nav;
