// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

// Components

// Utilities

// Constants

// Class

class Hero extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    const { children, className } = this.props;

    const classes = classNames( 'hero', {
      [className]: className ? true : null,
    });

    return (

      <div className={ classes }>
        { children }
      </div>

    );

  }

}

// PropTypes

Hero.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Hero.defaultProps = {

};

// Export

export default Hero;
