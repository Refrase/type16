// Styles

import './index.scss';

// Libraries

import React, { Component } from 'react';

// Components

import Frame from 'components/Frame';
import PageSection from 'components/PageSection';

// Utilities

// Constants

// Class

class Footer extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    return (
      <div className="footer">
        <Frame color="#003456">
          <PageSection columns="2">
            <h1>Her er bunden</h1>
          </PageSection>
        </Frame>
      </div>
    );

  }

}

// PropTypes

Footer.propTypes = {

};

Footer.defaultProps = {

};

// Export

export default Footer;
