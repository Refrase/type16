/* ----- Landing (Projects) ----- */

// Styles
import './index.scss';
import './../../../../styles/vendor/fullpagejs.scss';

// Lib
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { fullpage } from 'fullpage.js'; // it actually IS used

// Components
import Hero from 'components/Hero';
import AnimatedHeroIllustration from 'components/AnimatedHeroIllustration';
import Logo from 'components/Logo';
import Frame from 'components/Frame';
import Project from 'components/Project';

// Actions
import { getProjects, resetProjects } from 'ducks/consume/projects';

// Utils
import { changeColorOnScroll } from 'utils/changeColorOnScroll';

// Class
class Container extends Component {

  constructor(props) {
    super(props);

    this.colorsMorph = [];
    this.colorsTextOverlay = [];
    this.projectClients = ['Welcome'];

    this.snapSections = this.snapSections.bind(this);
    this.moveOverlay = this.moveOverlay.bind(this); // Not used now. fadeOverlay() used.
    this.fadeOverlay = this.fadeOverlay.bind(this);
    this.initChangeColorOnScroll = this.initChangeColorOnScroll.bind(this);
    this.setUIElementsColorToBlack = this.setUIElementsColorToBlack.bind(this);

    // For fadeOverlay or moveOverlay function
    this.nonMoveAreaSize = 70; // Percent of screen in which the transform is NOT triggered
    this.nonMoveArea = $( window ).height() * (this.nonMoveAreaSize / 100);
    this.moveArea = $( window ).height() - this.nonMoveArea - 120; // 120 is the distance from the chevron-icon to the bottom
  }

  componentDidMount() {
    getProjects( this.props.dispatch );
    $( window ).on( 'resize', () => {
      this.nonMoveArea = $( window ).height() * (this.nonMoveAreaSize / 100);
      this.moveArea = $( window ).height() - this.nonMoveArea - 120; // 120 is the distance from the chevron-icon to the bottom
    });
  }

  componentDidUpdate() {
    let snapSectionsLoaded = null;
    if ( this.props.projects.length > 0 ) {
      if ( !snapSectionsLoaded ) {
        this.snapSections();
        snapSectionsLoaded = true;
      } else {
        $.fn.fullpage.reBuild();
      }
      this.initChangeColorOnScroll();
      this.fadeOverlay();
    }
  }

  componentWillUnmount() {
    resetProjects( this.props.dispatch );
    $.fn.fullpage.destroy( 'all' ); // Destroy fullpage-plugin AND its added styles and markup
    $( window ).off( 'scroll' );
    $( window ).off( 'mousemove' );
    $( window ).off( 'resize' );
    this.setUIElementsColorToBlack();
  }

  setUIElementsColorToBlack() {
    $( '#fp-nav' ).children( 'ul' ).children( 'li' ).children( 'a' ).children( 'span' ).css({ 'background-color': 'black' });
    $( '.header_icon-burger' ).children( '.icon_inner' ).children( 'span' ).css({ 'background-color': 'black' });
  }

  snapSections() {
    $('#fullpage').fullpage({
      keyboardScrolling: true,
      navigation: true,
      navigationPosition: 'left',
      navigationTooltips: this.projectClients,
      controlArrows: null,
      scrollBar: true,
    });
  }

  initChangeColorOnScroll() {
    const navProjectsDots = $( '#fp-nav' ).children( 'ul' ).children( 'li' ).children( 'a' ).children( 'span' );
    navProjectsDots.addClass( 'transition' );
    const iconBurger = $( '.header_icon-burger' ).children( '.icon_inner' ).children( 'span' );

    if ( this.colorsMorph ) {
      $( window ).on( 'scroll', () => {
        setTimeout( changeColorOnScroll( navProjectsDots, this.colorsTextOverlay ), 300 );
        setTimeout( changeColorOnScroll( iconBurger, this.colorsTextOverlay ), 300 );
      });
    }
  }

  fadeOverlay() {
    const overlay = $( '.project_overlay' );
    let opacity = null;

    $( window ).on( 'mousemove', overlay, (e) => {
      const mousePosMinusNonMoveArea = e.clientY - this.nonMoveArea;
      if ( e.clientY > this.nonMoveArea ) {
        opacity = 1 - (((mousePosMinusNonMoveArea / (this.moveArea / 100)) + 0.9) / 100) - 0.1;
        overlay.css( 'opacity', opacity );
      } else {
        overlay.css( 'opacity', 0.9 );
      }
    });
  }

  moveOverlay() {
    const overlay = $( '.project_overlay' );
    let xPos = null;
    const moveFactor = 1 / (1 - (this.nonMoveAreaSize / 100));

    $( window ).on( 'mousemove', overlay, (e) => {
      const mousePosMinusNonMoveArea = e.clientY - this.nonMoveArea;
      if ( e.clientY > this.nonMoveArea ) {
        xPos = mousePosMinusNonMoveArea * -moveFactor;
        overlay.css( 'transform', `translate3d(${xPos}px, 0, 0)` );
      } else {
        overlay.css( 'transform', 'translate3d(0, 0, 0)' );
      }
    });
  }

  renderProject(project, index) {
    this.colorsMorph.push( project.colorBackground ); // Create array with all project colors
    this.colorsTextOverlay.push( project.colorTextOverlay ); // Create array with all preferred textcolor on main color
    this.projectClients.push( project.client ); // Create array with all project clients

    return (
      <Project key={ index }
        imageCover={ project.images ? project.images.cover : null }
        clientBackground={ project.colorBackground }
        colorTextOverlay={ project.colorTextOverlay }
        client={ project.client }
        url={ `/projects/${project.id}` } />
    );
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="page-landing">
        <div id="fullpage">
          <Hero>
            { projects ? <Logo animateOnScroll /> : <h1 className="margin-bottom-4-1 fadeIn">Nice sweater!</h1> }
            <AnimatedHeroIllustration />
          </Hero>
          { projects ? ( projects.map( (project, index) => this.renderProject(project, index) ) ) : null }
        </div>
      </div>
    );
  }
}

// PropTypes
Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  projects: PropTypes.array,
};

// Mapping
function mapStateToProps(state) {
  return {
    projects: state.consume.projects.projects,
  };
}

// Export
export default connect(mapStateToProps)(Container);
