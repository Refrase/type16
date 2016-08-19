// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import $ from 'jquery';

// Class

class Frame extends Component {

  constructor(props) {

    super(props);

    this.changeColorOnScroll = this.changeColorOnScroll.bind(this);

  }

  componentDidMount() {

    if ( this.props.colorsMorph ) {
      $( window ).on( 'scroll', () => {
        setTimeout( this.changeColorOnScroll, 300 );
      });
    }

  }

  componentWillUnmount() {

    $( window ).off( 'scroll', this.changeColorOnScroll );

  }

  changeColorOnScroll() {

    const windowHeight = $( window ).height();
    const documentHeight = $( document ).height();
    const footerHeight = $( '.footer' ).height();
    const navProjectTeasersDots = $( '#fp-nav' ).children( 'ul' ).children( 'li' ).children( 'a' ).children( 'span' );
    navProjectTeasersDots.addClass( 'transition' );
    const scrollTop = $( window ).scrollTop();

    for ( let i = 0; i < this.props.colorsMorph.length; i++ ) {
      const calcSection = (windowHeight / 2) * (i + 1) + (windowHeight / 2 * i); // Change color when halfway down each section

      if (scrollTop > windowHeight / 2 &&
          scrollTop < (documentHeight - windowHeight - footerHeight + 1) ) { // But transparent in top and when hitting the footer
        if ( scrollTop > calcSection ) {
          navProjectTeasersDots.css({ 'background-color': this.props.colorsMorph[i] });
        }
      } else {
        navProjectTeasersDots.css({ 'background-color': '#111' });
      }
    }

  }

  render() {

    const {
      children,
      className,
      color,
      colorsMorph,
      fixed,
    } = this.props;

    const styles = {};
    if ( color ) { styles.borderColor = color; }

    const classes = classnames( 'frame', {
      'frame-fixed': fixed || colorsMorph ? true : null,
      [className]: className ? true : null,
    });

    return (
      <div className={ classes } style={ styles }>
        { children }
      </div>
    );

  }

}

// PropTypes

Frame.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  colorsMorph: PropTypes.array,
  fixed: PropTypes.bool,
};

Frame.defaultProps = {

};

// Export

export default Frame;
