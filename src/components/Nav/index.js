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
        <Link to="/">Projekter</Link>
        <Link to="/type16">TYPE16</Link>
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
