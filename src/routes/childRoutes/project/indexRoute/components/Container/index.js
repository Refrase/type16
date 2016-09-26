/* ----- Project ----- */

// Styles
import './index.scss';
import './red.scss';
import './relibond.scss';

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
    const projectRelibond = this.props.params.projectId === 'relibond';

    const stylesRedHeadlineGraph = {};
    stylesRedHeadlineGraph.textAlign = 'center';

    const stylesRelibondLastBlockBackground = {};
    const pattern = project.images.patterns ? `url( ${project.images.patterns[0]} )` : null;
    stylesRelibondLastBlockBackground.backgroundImage = pattern;

    return projectIdMatchesUrl ? (
      <div key={ index }>

      { projectRed ? (
        <div className="red">
          <GridBlock>
            <div className="span-5 span-8-tablet span-10-mobile">
              <h1 className="margin-bottom-2-1">{ project.headline }</h1>
              <p>{ project.texts[0] }</p>
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
              <h2 style={ stylesRedHeadlineGraph } className="padding-3-1 position-absolute">Message condensed.</h2>
            </div>
            { project.images.blueprints.graph ? ( <img src={ project.images.blueprints.graph } /> ) : null }
          </div>
        </div>
      ) : null }

      { projectRelibond ? (
        <div className="relibond">
          <GridBlock>
            <div className="span-5 span-8-tablet span-10-mobile">
              <h1 className="margin-bottom-2-1">{ project.headline }</h1>
              <p>{ project.texts[0] }</p>
            </div>
            { project.devices && project.screens ? (
            <div className="devices span-8 offset-4 span-10-tablet offset-2-tablet span-12-mobile offset-0-mobile">
              { project.devices.desktop && project.screens.desktop ? ( <Device device={ project.devices.desktop } screen={ project.screens.desktop } /> ) : null }
            </div>
            ) : null }
          </GridBlock>
          <div>
            { project.images.blueprints.logo ? ( <img src={ project.images.blueprints.logo } className="relibond_blueprint-logo" /> ) : null }
            <h5 className="margin-left relibond_blueprint-logoText">Logo</h5>
          </div>
          { project.keywords ? (
          <KeywordBlocks textCenter
            words={ project.keywords }
            colors={ project.colors } />
          ) : null }
          <GridBlock>
            <div className="span-5 span-8-tablet span-12-mobile">
              <h3 className="margin-bottom">Cool headline</h3>
              <p>{ project.texts[1] }</p>
            </div>
            <div className="span-8 offset-4 span-7-tablet offset-4-tablet span-11-mobile offset-1-mobile">
              <img src={ project.images.illustrations[0] } width="100%" />
            </div>
          </GridBlock>
          <div style={ stylesRelibondLastBlockBackground } className="relibond_block-last_background flipHorizontal"></div>
          <img src={ project.images.cover } width="100%" className="flipHorizontal" />
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
