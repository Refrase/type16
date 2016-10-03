// Libraries
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// Class
class Watermark extends Component {

  constructor(props) {
    super(props);

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);

    this.mqMobile = window.matchMedia( '(max-width: 480px)' );
    this.mqTablet = window.matchMedia( '(min-width: 481px) and (max-width: 768px)' );

    this.state = {
      isMobile: null,
      isTablet: null,
    };

  }

  componentWillMount() {
    this.mqMobile.addListener(this.mediaQueryChanged);
    this.mqTablet.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.mqMobile.removeListener(this.mediaQueryChanged);
    this.mqTablet.removeListener(this.mediaQueryChanged);
  }

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
      heights,
      marginsTop,
    } = this.props;

    const styles = {
      backgroundImage: imageUrl ? `url( ${imageUrl} )` : null,
      width: '100%',
      height: heights.desktop,
      marginTop: marginsTop.desktop,
      opacity: '0.05',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left',
      backgroundSize: 'auto 100%',
      backgroundOrigin: 'border-box',
    };

    if ( this.state.isTablet ) {
      styles.height = heights.tablet;
      styles.marginTop = marginsTop.tablet;
    }

    if ( this.state.isMobile ) {
      styles.height = heights.mobile;
      styles.marginTop = marginsTop.mobile;
    }

    const classes = classnames( 'watermark', { [className]: className ? true : null });

    return ( <div style={ styles } className={ classes } /> );

  }

}

// PropTypes
Watermark.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  heights: PropTypes.shape({
    desktop: React.PropTypes.number,
    tablet: React.PropTypes.number,
    mobile: React.PropTypes.number,
  }),
  marginsTop: PropTypes.shape({
    desktop: React.PropTypes.number,
    tablet: React.PropTypes.number,
    mobile: React.PropTypes.number,
  }),
};

// Export
export default Watermark;
