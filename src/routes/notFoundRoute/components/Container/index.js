// Lib

import React, { Component } from 'react';

// Components

import ErrorPage from './../ErrorPage';

// Class

class Container extends Component {

  render() {

    return (<ErrorPage errorCode={ 404 } />);

  }
}

// Export

export default Container;
