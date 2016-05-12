// Stylings

import './index.scss';

// Lib

import React, { Component } from 'react';

// Components

// Utilities

// Constants

// Class

class ErrorPage extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    return (
      <div>
        <h1>Du er vist havnet et forkert sted.</h1>
        <p>Medmindre du ledte efter en side, hvor der står, at du vist er havnet et forkert sted. I så fald er du havnet det helt rigtige sted. Velkommen!</p>
      </div>
    );

  }

}

// PropTypes

ErrorPage.propTypes = {

};

ErrorPage.defaultProps = {

};

// Export

export default ErrorPage;
