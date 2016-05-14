/* ----- Landing ----- */

// Styles

import './index.scss';

// Lib

import React, { Component } from 'react';

// Utils

import { scrollToId } from 'utils/scrollToId';

// Components

import Hero from 'components/Hero';
import Logo from 'components/Logo';
import Icon from 'components/Icon';
import PageSection from 'components/PageSection';

// Images

// Class

class Container extends Component {

  constructor(props) {

    super(props);

    this.handleClickHeroIcon = this.handleClickHeroIcon.bind(this);

  }

  handleClickHeroIcon() {

    scrollToId( '.pageSection-1' );

  }

  render() {

    return (
      <div>
        <Hero>
          <Logo animateOnScroll />
          <Icon which="chevron" className="iconHero" onClick={ this.handleClickHeroIcon } />
        </Hero>
        <PageSection columns="4" className="pageSection-1 backgroundColor-shadow-lighter-2 width-full height-full padding-none">
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
