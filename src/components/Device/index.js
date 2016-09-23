// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// Components

// Images

import iPhone from './assets/iphone.svg';
import iPad from './assets/ipad.svg';
import Mac from './assets/mac.svg';

// Class

class Device extends Component {

  constructor(props) {

    super(props);

    this.renderDevice = this.renderDevice.bind(this);

  }

  renderDevice( device, screen ) {

    switch ( device ) {

      case 'iPhone' :

        return (
          <div className="device_wrap">
            <img src={ iPhone } className="device device-iPhone" />
            <div className="device_imageWrap device_imageWrap-iPhone">
              <div className="device_scrollbarHide">
                <img src={ screen } className="device_image" />
              </div>
            </div>
          </div>
        );

      case 'iPad' :

        return (
          <div className="device_wrap">
            <img src={ iPad } className="device device-iPad" />
            <div className="device_imageWrap device_imageWrap-iPad">
              <div className="device_scrollbarHide">
                <img src={ screen } className="device_image" />
              </div>
            </div>
          </div>
        );

      case 'Mac' :

        return (
          <div className="device_wrap">
            <img src={ iPhone } className="device device-mac" />
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

Device.defaultProps = {

};

// Export

export default Device;
