/* ----- Project ----- */

// Styles

import './index.scss';

// Lib

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import inViewport from 'in-viewport';
import $ from 'jquery';

// Components

import Project from 'components/Project';
import KeywordBlocks from 'components/KeywordBlocks';

// Actions

import { getProjects, resetProjects } from 'ducks/consume/projects';

// Class

class Container extends Component {

  constructor(props) {

    super(props);

    this.checkForInViewport = this.checkForInViewport.bind(this);
    this.renderProject = this.renderProject.bind(this);

  }

  componentDidMount() {

    getProjects(this.props.dispatch);

  }

  componentDidUpdate() {

    if ( this.props.projects ) {
      this.checkForInViewport();
    }

  }

  componentWillUnmount() {

    resetProjects(this.props.dispatch);

    $( window ).off( 'resize', this.checkForInViewport );
    $( window ).off( 'scroll', this.checkForInViewport );

  }

  checkForInViewport() {

    const projectTitle = document.getElementById( 'project_title' );

    if ( projectTitle ) {
      inViewport(projectTitle, { offset: 200 }, () => {
        $( projectTitle ).addClass( 'project_title-shown' );
      });
    }

  }

  renderProject(project, index) {

    const projectIdMatchesUrl = project.id === this.props.params.projectId;

    return projectIdMatchesUrl ? (
      <div>
        <Project
          key={ index }
          client={ project.client }
          clientBackground={ project.colorBackground }
          title={ project.title }
          text={ project.text }
          device={ project.device ? project.device : null }
          screen={ project.screens ? project.screens.phone : null } />
        { project.keywords ?
          <KeywordBlocks
            words={ project.keywords }
            colors={ project.colors } />
        : null }
      </div>
    ) : null;

  }

  render() {

    const { projects } = this.props;

    return (
      <div className="page-project">
        { projects ? ( projects.map((project, index) => ( this.renderProject(project, index) ))) : null }
      </div>
    );

  }

}

// PropTypes

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object,
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
