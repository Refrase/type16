/* ----- TYPE16 ----- */

// Styles
import './index.scss';

// Lib
import React, { Component } from 'react';
import $ from 'jquery';
import mousewheel from 'jquery-mousewheel'; // It IS used!

// Components
import Hero from 'components/Hero';

// Images
import logoSVG from './assets/logo-type16-white.svg';
import watercolorTest from './assets/vandfarve-test.gif';

// Class
class Container extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.initialLogoLeft = null;
    this.initialLogoBottom = null;
    this.initialLogoHeight = null;
    this.scrollLeft = document.body.scrollLeft;
  }

  componentWillMount() { document.body.style.overflowY = 'hidden'; }

  componentDidMount() {
    $( document ).on( 'mousewheel', (event, delta) => {
      document.body.scrollLeft -= delta * 5;
      event.preventDefault();
    });
    $( document ).on( 'scroll', this.handleScroll );
  }

  // TODO Test horizontal scroll hijack på mobile devices!

  componentWillUnmount() {
    $( document ).off( 'mousewheel' );
    $( document ).off( 'scroll' );
  }

  // Move logo to corner with scrollamount
  handleScroll() {
    // Set initial values, 1 time
    if ( this.initialLogoLeft === null && this.initialLogoBottom === null && this.initialLogoHeight === null ) {
      this.initialLogoLeft = $( '.logo' ).css( 'left' );
      this.initialLogoBottom = $( '.logo' ).css( 'bottom' );
      this.initialLogoHeight = $( '.logo' ).css( 'height' );
    }

    const initialLogoLeftNum = parseInt(this.initialLogoLeft.match(/\d+/)[0], 10);
    const initialLogoBottomNum = parseInt(this.initialLogoBottom.match(/\d+/)[0], 10);
    const initialLogoHeightNum = parseInt(this.initialLogoHeight.match(/\d+/)[0], 10);

    this.scrollLeft = document.body.scrollLeft;
    const startingPoint = 1400; // How many pixels to wait to apply effects

    if ( this.scrollLeft > startingPoint ) {

      // Creating values to go left on scroll. Adjusted so that the 'left' property gets smaller faster, så that it has a straight line towards the corner
      const xValue = (this.scrollLeft - startingPoint) * (initialLogoLeftNum / initialLogoBottomNum) < initialLogoLeftNum - 10 ? initialLogoLeftNum - (this.scrollLeft - startingPoint) * (initialLogoLeftNum / initialLogoBottomNum) : 10;
      const yValue = (this.scrollLeft - startingPoint) < initialLogoBottomNum - 10 ? initialLogoBottomNum - (this.scrollLeft - startingPoint) : 10;

      // For making the logoer gradually smaller
      let newHeight = null;
      const scaleRatio = initialLogoLeftNum / (this.scrollLeft - startingPoint);
      if ( scaleRatio > 1 ) {
        newHeight = initialLogoHeightNum / 1;
      } else if ( scaleRatio < 1 && scaleRatio > 0.3 ) {
        newHeight = initialLogoHeightNum * scaleRatio;
      } else {
        newHeight = initialLogoHeightNum * 0.3;
      }

      $( '.logo' ).css({
        left: xValue,
        bottom: yValue,
        height: newHeight,
      });

    // Set logo to original position if scrollLeft === 0
    } else if ( this.scrollLeft === 0 ) {

      $( '.logo' ).css({
        left: initialLogoLeftNum,
        bottom: initialLogoBottomNum,
        height: initialLogoHeightNum,
      });

    }
  }

  render() {
    return (
      <div className="page-type16">
        <Hero>
          <img className="logo" src={ logoSVG } height="120" />
        </Hero>
        <img src={ watercolorTest } />
      </div>
    );
  }
}

// PropTypes
Container.propTypes = {

};

// Export
export default Container;
