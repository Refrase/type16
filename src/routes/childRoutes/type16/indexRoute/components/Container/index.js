/* ----- TYPE16 ----- */

// Styles
import './index.scss';

// Lib
import React, { Component } from 'react';
import $ from 'jquery';
import mousewheel from 'jquery-mousewheel'; // It IS used!

// Components
import Hero from 'components/Hero';

// Images
import logo from './assets/logo-type16-white.svg';
import watercolorTest from './assets/vandfarve-test.gif';

// Class
class Container extends Component {

  constructor(props) { super(props); }

  componentWillMount() { document.body.style.overflowY = 'hidden'; }

  componentDidMount() {
    $( 'body' ).on( 'mousewheel', (event, delta) => {
      document.body.scrollLeft -= delta * 5;
      event.preventDefault();
    });
  }

  componentWillUnmount() { $( 'body' ).off( 'mousewheel' ); }

  // TODO Lad logoet blive mindre og glide ud i et hjørne i takt med at der bliver scrollet

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
