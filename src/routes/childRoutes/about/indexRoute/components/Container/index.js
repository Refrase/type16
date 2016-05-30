/* ----- About ----- */

// Styles

import './index.scss';

// Lib

import React, { Component } from 'react';

// Components

import Button from 'components/Button';
import Hero from 'components/Hero';
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
          <h1 className="fontSize-display fontFamily-logo text-transform-uppercase">Philosophy</h1>
        </Hero>

        <PageSection columns="3">
          <div>
            <Button linkTo="/">Projects</Button>
          </div>
          <div>
            <Button linkTo="/" link>Testlink</Button>
          </div>
          <div>
            <ul>
              <li>Playful</li>
              <li>Devils in the details</li>
              <li>Etc.</li>
            </ul>
          </div>
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
