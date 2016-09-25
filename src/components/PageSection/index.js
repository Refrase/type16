// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// Components

// Utilities

// Constants

// Class

class PageSection extends Component {

  constructor(props) { super(props); }

  render() {
    const {
      alignItems,
      children,
      className,
      columns,
      flexDirection,
      justifyContent,
      style,
      width,
    } = this.props;

    const classes = classnames( 'pageSection pageSection-columns', {
      'pageSection-columns-2': columns === '2',
      'pageSection-columns-3': columns === '3',
      'pageSection-columns-4': columns === '4',
      'pageSection-columns-5': columns === '5',
      'pageSection-columns-6': columns === '6',
      'pageSection-columns-7': columns === '7',
      'pageSection-columns-8': columns === '8',
      'pageSection-columns-9': columns === '9',
      'pageSection-columns-10': columns === '10',
      'pageSection-columns-11': columns === '11',
      'pageSection-columns-12': !columns || columns === '12',
      [className]: className ? true : null,
    });

    let styles = {};

    if ( alignItems ) { styles.alignItems = alignItems; }
    if ( flexDirection ) { styles.flexDirection = flexDirection; }
    if ( justifyContent ) { styles.justifyContent = justifyContent; }
    if ( width ) { styles.width = width; }

    if ( style ) styles = Object.assign({}, styles, style);

    return (
      <div className={ classes } style={ styles }>{ children }</div>
    );
  }
}

// PropTypes
PageSection.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.string,
  className: PropTypes.string,
  alignItems: PropTypes.string,
  width: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  style: PropTypes.object,
  styles: PropTypes.object,
};

// Export
export default PageSection;
