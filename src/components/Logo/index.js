// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

// Components

// Utilities

// Constants

// Class

class Logo extends Component {

  constructor(props) {

    super(props);

    this.parallaxLogoLetters = this.parallaxLogoLetters.bind(this);

    this.state = {
      windowScrollTop: $( window ).scrollTop(),
    };

  }

  componentDidMount() {

    this.logoLetters = $( '.logoWrap' ).children();

    this.randomNumbers = []; // Array of random numbers generated once (below), used to get different scroll speeds
    for ( let i = 0; i < this.logoLetters.length; i++ ) {
      const randomNumber = (Math.random() + 1) * (Math.random() + 1);
      this.randomNumbers.push( randomNumber );
    }

    const { animateOnScroll } = this.props;
    if ( animateOnScroll ) {
      $( window ).on( 'scroll', this.parallaxLogoLetters );
    }

  }

  componentWillUnmount() {

    $( window ).off( 'scroll', this.parallaxLogoLetters );

  }

  parallaxLogoLetters() {

    this.setState({
      windowScrollTop: $( window ).scrollTop(),
    });

    for ( let i = 0; i < this.logoLetters.length; i++ ) {
      $( this.logoLetters[i] ).css({
        transform: `translate3d(0px, -${this.state.windowScrollTop * this.randomNumbers[i]}px, 0px)`, // 'translate3d' force GPU
      });
    }

  }

  render() {

    return (

      <div className="logoWrap">
        <span>T</span>
        <span>Y</span>
        <span>P</span>
        <span>E</span>
        <span>1</span>
        <span>6</span>
      </div>

    );

  }

}

// PropTypes

Logo.propTypes = {
  animateOnScroll: PropTypes.bool,
};

Logo.defaultProps = {

};

// Export

export default Logo;
