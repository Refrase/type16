// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';

// Components

// Utilities

// Constants

// Class

class Frame extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    const {
      color,
      children,
    } = this.props;

    const styles = {};
    if ( color ) { styles.borderColor = color; }

    return (
      <div className="frame" style={ styles }>
        { children }
      </div>
    );

  }

}

// PropTypes

Frame.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

Frame.defaultProps = {

};

// Export

export default Frame;
