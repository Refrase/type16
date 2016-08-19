// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';

// Components

// Utilities

// Constants

// Class

class Hero extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    const { children } = this.props;

    return (

      <div className="hero section">
        { children }
      </div>

    );

  }

}

// PropTypes

Hero.propTypes = {
  children: PropTypes.node,
};

Hero.defaultProps = {

};

// Export

export default Hero;
