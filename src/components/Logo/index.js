// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

// Assets

import logoletter1 from './assets/logoletter-white-1.svg';
import logoletter2 from './assets/logoletter-white-2.svg';
import logoletter3 from './assets/logoletter-white-3.svg';
import logoletter4 from './assets/logoletter-white-4.svg';
import logoletter5 from './assets/logoletter-white-5.svg';
import logoletter6 from './assets/logoletter-white-6.svg';

// Class

class Logo extends Component {

  constructor(props) {

    super(props);

    this.parallaxLogo = this.parallaxLogo.bind(this);

    this.state = {
      windowScrollTop: $( window ).scrollTop(),
    };

  }

  componentDidMount() {

    this.logoLetters = $( '.logoWrap_inner' ).children();

    this.randomNumbers = []; // Array of random numbers generated once (below), used to get different scroll speeds
    for ( let i = 0; i < this.logoLetters.length; i++ ) {
      const randomNumber = (Math.random() + 1.2) * (Math.random() + 1.2);
      this.randomNumbers.push( randomNumber );
    }

    if ( this.props.animateOnScroll ) {
      $( window ).on( 'scroll', this.parallaxLogo );
    }

  }

  componentWillUnmount() {

    $( window ).off( 'scroll', this.parallaxLogo );

  }

  parallaxLogo() {

    this.setState({
      windowScrollTop: $( window ).scrollTop(),
    });

    for ( let i = 0; i < this.logoLetters.length; i++ ) {
      const translateAmount = this.state.windowScrollTop * this.randomNumbers[i];
      $( this.logoLetters[i] ).css({
        transform: `translate3d(0px, -${translateAmount}px, 0px)`, // 'translate3d' force GPU
      });
    }

    // Translate whole logo opposite scroll
    const logo = $( '.logoWrap_inner' );
    const translateAmountLogo = this.state.windowScrollTop * 2.5;

    $( logo ).css({
      transform: `translate3d(0px, ${translateAmountLogo}px, 0px)`, // 'translate3d' force GPU
    });

  }

  render() {

    return (

      <div className="logoWrap">
        <div className="logoWrap_inner">
          <img src={ logoletter1 } />
          <img src={ logoletter2 } />
          <img src={ logoletter3 } />
          <img src={ logoletter4 } />
          <img src={ logoletter5 } />
          <img src={ logoletter6 } />
        </div>
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
