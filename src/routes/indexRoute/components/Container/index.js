/* ----- Landing ----- */

// Styles

import './index.scss';
import './../../../../styles/vendor/fullpagejs.scss';

// Lib

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import inViewport from 'in-viewport';
import { fullpage } from 'fullpage.js'; // it actually IS used

// Components

import Hero from 'components/Hero';
import Logo from 'components/Logo';
import Frame from 'components/Frame';
import ProjectTeaser from 'components/ProjectTeaser';

// Actions

import { getProjects, resetProjects } from 'ducks/consume/projects';

// Class

class Container extends Component {

  constructor(props) {

    super(props);

    this.colorsMorph = [];
    this.projectClients = ['Welcome'];

    this.checkForInViewport = this.checkForInViewport.bind(this);
    this.snapSections = this.snapSections.bind(this);

  }

  componentDidMount() {

    getProjects(this.props.dispatch);

  }

  componentDidUpdate() {

    if ( this.props.projects ) {
      this.checkForInViewport();
      this.snapSections();
    }

  }

  componentWillUnmount() {

    resetProjects(this.props.dispatch);

    $( window ).off( 'resize', this.checkForInViewport );
    $( window ).off( 'scroll', this.checkForInViewport );

    $.fn.fullpage.destroy('all'); // Destroy fullpage-plugin AND its added styles and markup

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

  checkForInViewport() {

    const projectsOnPage = $( '.projectTeaser' );

    for ( let i = 0; i < projectsOnPage.length; i++ ) {
      const projectTitle = document.getElementById( `projectTeaser_title-${i}` );

      inViewport(projectTitle, { offset: -100 }, () => {
        $( projectTitle ).addClass( 'projectTeaser_title-shown' );
      });
    }

  }

  renderProjectTeaser(project, index) {

    this.colorsMorph.push( project.colorMain ); // Create array with all project colors for Frame color-morphing
    this.projectClients.push( project.client ); // Create array with all project clients

    const id = `projectTeaser_title-${index}`;

    return (
      <ProjectTeaser key={ index }
        imageCover={ project.images ? project.images.cover : null }
        client={ project.client }
        clientBackground={ project.colorMain }
        device={ project.device }
        screen={ project.screen ? project.screen : null }
        text={ project.text }
        title={ project.title }
        titleId={ id } />
    );

  }

  render() {

    const { projects } = this.props;

    return (
      <div className="page-landing">
        <div id="fullpage">
          <Hero>
            { projects ? <Logo animateOnScroll /> : <h1 className="margin-bottom-4-1">Nice sweater!</h1> }
          </Hero>
          { projects ? ( projects.map( (project, index) => this.renderProjectTeaser(project, index) ) ) : null }
        </div>
        <Frame colorsMorph={ this.colorsMorph } color="rgba(255,255,255,0.97)" />
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
