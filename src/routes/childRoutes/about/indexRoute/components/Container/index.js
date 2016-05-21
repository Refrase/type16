/* ----- About ----- */

// Styles

import './index.scss';

// Lib

import React, { Component } from 'react';

// Components

import Button from 'components/Button';
import Hero from 'components/Hero';
import Frame from 'components/Frame';
import PageSection from 'components/PageSection';

// Images

// Class

class Container extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    return (
      <div className="pageAbout">

        <Hero>
          <h1 className="color-brandWhite fontSize-display fontFamily-logo text-transform-uppercase">Philosophy</h1>
        </Hero>

        <Frame>
          <PageSection columns="3">
            <div>
              <Button linkTo="/">Projects</Button>
            </div>
            <div>
              <Button linkTo="/" link>Testlink</Button>
            </div>
          </PageSection>
        </Frame>

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
