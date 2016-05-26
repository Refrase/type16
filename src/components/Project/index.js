// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

// components

import PageSection from 'components/PageSection';
import Device from 'components/Device';

// Class

class Project extends Component {

  constructor( props ) {

    super( props );

  }

  render() {

    const {
      clientBackground,
      className,
      client,
      titleId,
      screen,
      text,
      title,
      device,
    } = this.props;

    const classes = classNames( 'project', {
      [className]: className ? true : null,
    });

    const stylesTitle = {};
    if ( clientBackground ) { stylesTitle.background = clientBackground; }

    return (
      <div className={ classes }>
        <PageSection columns="4">
          <div>
            <h1 className="margin-bottom">{ client }</h1>
            <h5 className="margin-bottom-2-1 project_title" style={ stylesTitle } id={ titleId }>{ title }</h5>
            <p className="project_text" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div></div>
          { device ? (
            <div>
              <Device device={ device } screen={ screen } />
            </div>
          ) : null }
          <div></div>
        </PageSection>
      </div>
    );

  }

}

// PropTypes

Project.propTypes = {
  clientBackground: PropTypes.string,
  className: PropTypes.string,
  client: PropTypes.string,
  device: PropTypes.string,
  titleId: PropTypes.string,
  screen: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

Project.defaultProps = {

};

// Export

export default Project;
