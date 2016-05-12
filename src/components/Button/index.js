// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

// Components

// Utilities

// Constants

// Class

class Button extends Component {

  render() {

    const {
      children,
      className,
      inactive,
      linkTo,
      onClick,
      style,
      styling,
      target } = this.props;

    let html;

    const classes = classNames( 'button', {
      'button-primary': !styling || styling === 'primary',
      'button-secondary': styling === 'secondary',
      'button-inactive': inactive ? true : null,
      [className]: className ? true : null,
    });

    const styles = Object.assign({}, style);

    if (linkTo && !inactive) {

      const isInternal = /^(\/)/g.test(linkTo) ? true : null;

      if (isInternal) {

        html = (
          <Link className={ classes } style={ styles } to={ linkTo }>
            { children }
          </Link>
        );

      } else {

        html = (
          <a href="#" className={ classes } style={ styles } target={ target }>
            { children }
          </a>
        );

      }

    } else if (onClick && !inactive) {

      html = (
        <a href="#" className={ classes } style={ styles } onClick={ onClick }>
          { children }
        </a>
      );

    } else {

      html = (
        <div className={ classes } style={ styles }>
          { children }
        </div>
      );

    }

    return html;

  }

}

// PropTypes

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  inactive: PropTypes.bool,
  linkTo: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  styling: PropTypes.string,
  target: PropTypes.string,
};

Button.defaultProps = {
  target: '_self',
};

// Export

export default Button;
