/* ----- About ----- */

// Styles

import './index.scss';

// Lib

import React, { Component } from 'react';

// Components

import Button from 'components/Button';

// Images

// Class

class Container extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    return (
      <div className="pageAbout">
        <h1>About</h1>
        <Button linkTo="/">Home</Button>
      </div>
    );

  }

}

// PropTypes

Container.propTypes = {

};

Container.defaultProps = {

};

// Export

export default Container;
