// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

// Components

import Icon from 'components/Icon';

// Utilities

import { scrollToId } from 'utils/scrollToId';

// Actions

import { openMenu } from 'ducks/ui/menu';

// Class

class Header extends Component {

  constructor(props) {

    super(props);

    this.openMenu = this.openMenu.bind(this);
    this.handleClickIconChevron = this.handleClickIconChevron.bind(this);

  }

  openMenu(e) {

    e.preventDefault();
    openMenu(this.props.dispatch);

  }

  handleClickIconChevron(e) {

    e.preventDefault(); // Prevents flash of Hero-section, when clicking the chevron

    const chevron = $( '.header_icon-chevron' );
    const chevronOffsetTop = chevron.offset().top; // Get chevrons position from top
    const framesOnPage = $( '.frame' ); // Get frames (sections) on page

    let thereIsNextFrame = null;
    let framesLooped = 0;

    for ( let i = 0; i < framesOnPage.length; i++ ) { // Scroll to the next section that is below the chevron

      framesLooped++;
      thereIsNextFrame = framesOnPage[i].offsetTop > chevronOffsetTop;

      if ( thereIsNextFrame ) {
        scrollToId( framesOnPage[i] );

        if ( framesLooped === framesOnPage.length ) { // Rotate the chevron upside down, when arriving to last frame (section)
          chevron.addClass( 'rotateUpsideDown' );
        } else {
          chevron.removeClass( 'rotateUpsideDown' );
        }

        return;
      }
    }

    if ( !thereIsNextFrame && framesLooped >= framesOnPage.length ) { // If no next frame and all frames looped scroll to top (Hero)
      scrollToId( $( '.hero' ) );
      chevron.removeClass( 'rotateUpsideDown' ); // Rotate chevron back to original direction
      framesLooped = 0;
    }

  }

  render() {

    return (
      <div className="header">
        <Icon
          which="burger"
          className="header_icon header_icon-burger"
          onClick={ this.openMenu } />
        <Icon
          which="chevron"
          className="header_icon header_icon-chevron"
          onClick={ this.handleClickIconChevron } />
      </div>
    );

  }

}

// PropTypes

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Header.defaultProps = {

};

// Export

export default Header;
