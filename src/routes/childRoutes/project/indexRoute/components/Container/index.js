/* ----- Project ----- */

// Styles
import './index.scss';
import './red.scss';

// Lib
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import inViewport from 'in-viewport';
import $ from 'jquery';

// Components
import PageSection from 'components/PageSection';
import KeywordBlocks from 'components/KeywordBlocks';
import Device from 'components/Device';

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
    const projectRed = this.props.params.projectId === 'red';

    return projectIdMatchesUrl ? (
      <div key={ index }>

      { projectRed ? (
        <div>
          <PageSection className="red">
            <div className="span-5 span-8-tablet span-10-mobile">
              <h1>Alle skærme tænkt ind.</h1>
              <p>{ project.text }</p>
            </div>
            { project.devices && project.screens ? (
            <div className="devices span-6 offset-1 span-8-tablet offset-4-tablet span-12-mobile offset-0-mobile margin-top-4-1">
              { project.devices.phone && project.screens.phone ? ( <Device device={ project.devices.phone } screen={ project.screens.phone } /> ) : null }
              { project.devices.tablet && project.screens.tablet ? ( <Device device={ project.devices.tablet } screen={ project.screens.tablet } /> ) : null }
            </div>
            ) : null }
          </PageSection>
          { project.keywords ? (
          <div>
            <KeywordBlocks
              words={ project.keywords }
              colors={ project.colors } />
          </div>
          ) : null }
        </div>
      ) : null }

      </div>
    ) : null;

  }

  render() {
    const { projects } = this.props;
    return ( <div>{ projects ? ( projects.map((project, index) => ( this.renderProject(project, index) ))) : null }</div> );
  }

}

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object,
  projects: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    projects: state.consume.projects.projects,
  };
}

export default connect(mapStateToProps)(Container);
