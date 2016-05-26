// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// Components

// Images

import iPhone from './assets/iphone.svg';

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
            <img src={ iPhone } className="device-iPhone" />
            <div className="device-iPhone_imageWrap">
              <div className="device-iPhone_imageWrap-scrollbarHide">
                <img src={ screen } className="device-iPhone_image" />
              </div>
            </div>
          </div>
        );

      case 'iPad' :

        return (
          <div>
            <h1>Test iPad</h1>
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
