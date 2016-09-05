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

// Class

class Container extends Component {

  constructor(props) {

    super(props);

    this.colorsMorph = [];
    this.projectClients = ['Welcome'];

    this.snapSections = this.snapSections.bind(this);
    this.onProjectsLoad = this.onProjectsLoad.bind(this);

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
      } else {
        $.fn.fullpage.reBuild();
      }
    }

  }

  componentWillUnmount() {

    resetProjects(this.props.dispatch);

    $.fn.fullpage.destroy('all'); // Destroy fullpage-plugin AND its added styles and markup

  }

  // Initialize snap-to-section functionality only one time (when projects have loaded)
  onProjectsLoad() {

    this.snapSections();

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

  renderProject(project, index) {

    this.colorsMorph.push( project.colorMain ); // Create array with all project colors for Frame color-morphing
    this.projectClients.push( project.client ); // Create array with all project clients

    return (
      <Project key={ index }
        imageCover={ project.images ? project.images.cover : null }
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
        <Frame colorsMorph={ this.colorsMorph } color="rgba(0,0,0,0.1)" />
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
