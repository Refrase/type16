/* ----- Landing ----- */

// Styles

import './index.scss';

// Lib

import React, { Component } from 'react';
import $ from 'jquery';
import panelSnap from 'jquery-panelsnap';

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

    this.panelSnap = null;

    this.handleClickHeroIcon = this.handleClickHeroIcon.bind(this);

  }

  componentDidMount() {

    const optionsPanelSnap = {
      // $menu: '.header', // Reference a menu with menuitems to update when scrolling
      // menuSelector: 'a', // Belongs to abovelisted $menu
      panelSelector: '> .pageSection-snap',
      // namespace: '.page-landing',
      // slideSpeed: 250,
      // easing: 'linear',
      // navigation: {
      //   keys: {
      //     nextKey: 40, // down arrow code
      //     prevKey: 38, // up arrow code
      //   },
      // },
    };

    this.panelSnap = $( '.page-landing' ).panelSnap( optionsPanelSnap );

    console.log( this.panelSnap );

  }

  componentWillUnmount() {

    if (this.panelSnap) delete this.panelSnap;

  }

  handleClickHeroIcon() {

    scrollToId( '.pageSection-1' );

  }

  render() {

    return (
      <div className="page-landing">
        <Hero className="pageSection-snap">
          <Logo animateOnScroll />
          <Icon which="chevron" className="iconHero" onClick={ this.handleClickHeroIcon } />
        </Hero>
        <PageSection columns="4" className="pageSection-1 pageSection-snap backgroundColor-shadow-lighter-2 width-full height-full padding-none">
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
