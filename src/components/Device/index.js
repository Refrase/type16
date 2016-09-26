// Styles
import './index.scss';

// Libraries
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import $ from 'jquery';

// Images
import iPhone from './assets/iphone.svg';
import iPad from './assets/ipad.svg';
import Mac from './assets/mac.svg';

// Class
class Device extends Component {

  constructor(props) {
    super(props);
    this.renderDevice = this.renderDevice.bind(this);
    this.stopBodyScroll = this.stopBodyScroll.bind(this);
  }

  componentDidMount() {
    // this.stopBodyScroll();
  }

  stopBodyScroll() {
    $( '.device' ).mouseenter( () => {
      $( 'html, body' ).css( 'overflow', 'hidden' );
    }).mouseleave( () => {
      $( 'html, body' ).css( 'overflow', 'auto' );
    });
  }

  renderDevice( device, screen ) {
    switch ( device ) {
      case 'iPhone' :
        return (
          <div className="device_wrap device_wrap-iPhone">
            <img src={ iPhone } className="device_illustration device-iPhone" />
            <div className="device_imageWrap device_imageWrap-iPhone">
              <div className="device_scrollbarHide">
                <img src={ screen } className="device_image" />
              </div>
            </div>
          </div>
        );
      case 'iPad' :
        return (
          <div className="device_wrap device_wrap-iPad">
            <img src={ iPad } className="device_illustration device-iPad" />
            <div className="device_imageWrap device_imageWrap-iPad">
              <div className="device_scrollbarHide">
                <img src={ screen } className="device_image" />
              </div>
            </div>
          </div>
        );
      case 'Mac' :
        return (
          <div className="device_wrap device_wrap-mac">
            <img src={ Mac } className="device_illustration device-mac" />
            <div className="device_imageWrap device_imageWrap-mac">
              <div className="device_scrollbarHide">
                <img src={ screen } className="device_image" />
              </div>
            </div>
          </div>
        );
      default : return ( null );
    }
  }

  render() {
    const {
      className,
      device,
      screen,
    } = this.props;

    const classes = classnames( 'device', {
      [className]: className ? true : null,
    });

    return (
      <div className={ classes }>
        { this.renderDevice( device, screen ) }
      </div>
    );
  }
}

// PropTypes
Device.propTypes = {
  className: PropTypes.string,
  device: PropTypes.string,
  screen: PropTypes.string,
};

// Export
export default Device;
