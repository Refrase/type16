// Libraries
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// Class
class Watermark extends Component {

  constructor(props) {
    super(props);

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);

    this.mqMobile = window.matchMedia( '(max-width: 480px)' );
    this.mqTablet = window.matchMedia( '(max-width: 768px)' );

    this.state = {
      isMobile: null,
      isTablet: null,
    };

  }

  componentWillMount() {
    this.mqMobile.addListener(this.mediaQueryChanged);
    this.mqTablet.addListener(this.mediaQueryChanged);
  }

  componentDidUpdate() {
    console.log( this.state.isMobile );
    console.log( this.state.isTablet );
  }

  componentWillUnmount() {
    this.mqMobile.removeListener(this.mediaQueryChanged);
    this.mqTablet.removeListener(this.mediaQueryChanged);
  }

  // TODO SÆTTER IKKE TIL 'NULL' NÅR PÅ VEJ OP IGEN!!

  mediaQueryChanged() {
    this.setState({
      isMobile: this.mqMobile.matches,
      isTablet: this.mqTablet.matches,
    });
  }

  render() {

    const {
      className,
      imageUrl,
      height,
      marginTop,
      heightMobile,
      marginTopMobile,
      heightTablet,
      marginTopTablet,
    } = this.props;

    const styles = {
      backgroundImage: imageUrl ? `url( ${imageUrl} )` : null,
      width: '100%',
      height,
      marginTop,
      opacity: '0.05',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left',
      backgroundSize: 'auto 100%',
      backgroundOrigin: 'border-box',
    };

    if ( this.state.isMobile ) {
      styles.height = heightMobile;
      styles.marginTop = marginTopMobile;
    }

    if ( this.state.isTablet ) {
      styles.height = heightTablet;
      styles.marginTop = marginTopTablet;
    }
    // @include breakpoint( 'tablet' ) { height: 250px; margin-top: -200px;  }
    // @include breakpoint( 'mobile' ) { height: 150px; margin-top: -100px;  }

    const classes = classnames( 'watermark', { [className]: className ? true : null });

    return ( <div style={ styles } className={ classes } /> );

  }

}

// PropTypes
Watermark.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  height: PropTypes.string.isRequired,
  marginTop: PropTypes.string.isRequired,
  heightMobile: PropTypes.string.isRequired,
  marginTopMobile: PropTypes.string.isRequired,
  heightTablet: PropTypes.string.isRequired,
  marginTopTablet: PropTypes.string.isRequired,
};

// Export
export default Watermark;
