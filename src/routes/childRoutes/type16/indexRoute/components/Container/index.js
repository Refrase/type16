/* ----- TYPE16 ----- */

// Styles

import './index.scss';

// Lib

import React, { Component } from 'react';

// Components

import Button from 'components/Button';
import Hero from 'components/Hero';
import GridBlock from 'components/GridBlock';

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
          <h1 className="fontSize-display fontFamily-logo textTransform-uppercase">TYPE16</h1>
        </Hero>

        <GridBlock columns="3">
          <div>
            <Button linkTo="/">Projects</Button>
          </div>
          <div>
            <Button linkTo="/" link>Testlink</Button>
          </div>
          <div>
            <ul>
              <li>Playful</li>
              <li>Calm</li>
              <li>One thing at a time</li>
              <li>Devils in the details</li>
              <li>Etc.</li>
            </ul>
          </div>
        </GridBlock>

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
