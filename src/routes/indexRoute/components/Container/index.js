/* ----- Landing ----- */

// Styles

import './index.scss';

// Lib

import React, { Component } from 'react';

// Components

import Hero from 'components/Hero';
import Logo from 'components/Logo';
import PageSection from 'components/PageSection';

// Images

// Class

class Container extends Component {

  constructor(props) {

    super(props);

  }

  snapToNearest() {



  }

  render() {

    return (
      <div>
        <Hero>
          <Logo animateOnScroll />
        </Hero>
        <PageSection columns="4" className="backgroundColor-shadow-lighter-2 width-full height-full padding-none">
          <div>salfgæh</div>
          <div>salfgæh</div>
          <div>salfgæh</div>
          <div>salfgæh</div>
        </PageSection>
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
