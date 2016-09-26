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
import GridBlock from 'components/GridBlock';
import KeywordBlocks from 'components/KeywordBlocks';
import Device from 'components/Device';
import Footer from 'components/Footer';

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

    const stylesHeadlineGraph = {};
    stylesHeadlineGraph.textAlign = 'center';

    return projectIdMatchesUrl ? (
      <div key={ index }>

      { projectRed ? (
        <div className="red">
          <GridBlock>
            <div className="span-5 span-8-tablet span-10-mobile">
              <h1 className="margin-bottom-2-1">All screens considered.</h1>
              <p>{ project.text }</p>
            </div>
            { project.devices && project.screens ? (
            <div className="devices span-6 offset-1 span-8-tablet offset-4-tablet span-12-mobile offset-0-mobile margin-top-4-1">
              { project.devices.phone && project.screens.phone ? ( <Device device={ project.devices.phone } screen={ project.screens.phone } /> ) : null }
              { project.devices.tablet && project.screens.tablet ? ( <Device device={ project.devices.tablet } screen={ project.screens.tablet } /> ) : null }
            </div>
            ) : null }
          </GridBlock>
          { project.keywords ? (
          <KeywordBlocks
            words={ project.keywords }
            colors={ project.colors } />
          ) : null }
          <div>
            <div className="display-flex justifyContent-center">
              <h2 style={ stylesHeadlineGraph } className="padding-3-1 position-absolute">Message condensed.</h2>
            </div>
            { project.images.graphBlueprint ? ( <img src={ project.images.graphBlueprint } /> ) : null }
          </div>
        </div>
      ) : null }

      </div>
    ) : null;

  }

  render() {
    const { projects } = this.props;
    return (
      <div>
        { projects ? ( projects.map((project, index) => ( this.renderProject(project, index) ))) : null }
        <Footer />
      </div>
    );
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
