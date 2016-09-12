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
    this.onProjectsLoad = this.onProjectsLoad.bind(this);
    this.moveOverlay = this.moveOverlay.bind(this);
    this.initChangeColorOnScroll = this.initChangeColorOnScroll.bind(this);

    this.state = {
      projectsLoaded: null,
    };

  }

  componentDidMount() {

    getProjects(this.props.dispatch);

    if ( this.state.projectsLoaded ) {
      $.fn.fullpage.reBuild();
    }

  }

  componentDidUpdate() {

    if ( this.props.projects ) {
      if ( !this.state.projectsLoaded ) {
        this.onProjectsLoad();
        this.moveOverlay();
      } else {
        $.fn.fullpage.reBuild();
      }
    }

  }

  componentWillUnmount() {

    resetProjects(this.props.dispatch);

    $.fn.fullpage.destroy('all'); // Destroy fullpage-plugin AND its added styles and markup

    $( window ).off( 'scroll', changeColorOnScroll );
    $( window ).off( 'mousemove', this.moveOverlay() );

  }

  // Initialize snap-to-section functionality only one time (when projects have loaded)
  onProjectsLoad() {

    this.snapSections();
    this.initChangeColorOnScroll();

    this.setState({
      projectsLoaded: true,
    });

  }

  snapSections() {

    $('#fullpage').fullpage({
      keyboardScrolling: true,
      navigation: true,
      navigationPosition: 'left',
      navigationTooltips: this.projectClients,
      slidesNavigation: null,
      slidesNavPosition: 'bottom',
      controlArrows: null,
      normalScrollElements: '.device', // Normal scroll active when mouse is over these
      scrollBar: true,
      fitToSectionDelay: 300,
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

  moveOverlay() {

    const overlay = $( '.project_overlay' );

    $( window ).on( 'mousemove', overlay, (e) => {

      let x = null;
      const halfWindowWidth = $( window ).width() / 2;
      const moveFactor = 0.003;
      const mousePosMinusHalfWidth = e.clientX - halfWindowWidth;

      if ( e.clientX > halfWindowWidth ) { x = mousePosMinusHalfWidth * -moveFactor * (mousePosMinusHalfWidth); }

      overlay.css( 'transform', `translate3d(${x}px, 0, 0)` );

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
