// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

// Components

// Utilities

// Constants

// Class

class Icon extends Component {

  constructor(props) {

    super(props);

    this.renderIcon = this.renderIcon.bind(this);

  }

  renderIcon( which ) {

    switch ( which ) {

      case 'burger' :

        return (
          <div className="icon_inner icon-burger">
            <span className="icon_bar icon-burger_bar"></span>
            <span className="icon_bar icon-burger_bar"></span>
            <span className="icon_bar icon-burger_bar"></span>
          </div>
        );

      case 'cross' :

        return (
          <div className="icon_inner icon-cross">
            <span className="icon_bar icon-cross_bar"></span>
            <span className="icon_bar icon-cross_bar"></span>
          </div>
        );

      case 'chevron' :

        return (
          <div className="icon_inner icon-chevron">
            <span className="icon_bar icon-chevron_bar"></span>
            <span className="icon_bar icon-chevron_bar"></span>
          </div>
        );

      default : return ( null );

    }

  }

  render() {

    const {
      className,
      which,
      onClick,
    } = this.props;

    const classes = classNames( 'icon', {
      [className]: className ? true : null,
    });

    return (

      <a className={ classes } href="#" onClick={ onClick }>
        { this.renderIcon( which ) }
      </a>

    );

  }

}

// PropTypes

Icon.propTypes = {
  className: PropTypes.string,
  which: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {

};

// Export

export default Icon;
