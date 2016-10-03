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

  handleClickIconChevron(e) { // ATT! fullpage.js-plugin have to be disabled for this to work

    e.preventDefault(); // Prevents flash of Hero-section, when clicking the chevron

    const chevron = $( '.header_icon-chevron' );
    const chevronOffsetTop = chevron.offset().top; // Get chevrons position from top
    const projectsOnPage = $( '.project' ); // Get projects (sections) on page

    let thereIsNextFrame = null;
    let projectsLooped = 0;

    for ( let i = 0; i < projectsOnPage.length; i++ ) { // Scroll to the next section that is below the chevron

      projectsLooped++;
      thereIsNextFrame = projectsOnPage[i].offsetTop > chevronOffsetTop;

      if ( thereIsNextFrame ) {
        scrollToId( projectsOnPage[i] );

        if ( projectsLooped === projectsOnPage.length ) { // Rotate the chevron upside down, when arriving to last project (section)
          chevron.addClass( 'rotateUpsideDown' );
        } else {
          chevron.removeClass( 'rotateUpsideDown' );
        }

        return;
      }
    }

    if ( !thereIsNextFrame && projectsLooped >= projectsOnPage.length ) { // If no next project and all projects looped scroll to top (Hero)
      scrollToId( $( '.hero' ) );
      chevron.removeClass( 'rotateUpsideDown' ); // Rotate chevron back to original direction
      projectsLooped = 0;
    }

  }

  render() {
    return (
      <div className="header">
        <Icon
          which="burger"
          className="header_icon header_icon-burger"
          onClick={ this.openMenu } />
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
