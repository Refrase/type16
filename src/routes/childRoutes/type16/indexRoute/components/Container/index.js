/* ----- TYPE16 ----- */

// Styles
import './index.scss';

// Lib
import React, { Component } from 'react';

// Components
import Hero from 'components/Hero';

// Images
import logo from './assets/logo-type16-white.svg';
import watercolorTest from './assets/vandfarve-test.gif';

// Class
class Container extends Component {

  constructor(props) { super(props); }

  componentWillMount() { document.body.style.overflowY = 'hidden'; }
  componentWillUnmount() { document.body.style.overflowY = 'auto'; }

  render() {
    return (
      <div className="page-type16">
        <Hero>
          <img className="logo" src={ logo } height="56" />
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
