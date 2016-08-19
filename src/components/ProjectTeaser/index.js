// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

// Components

import Device from 'components/Device';

// Class

class ProjectTeaser extends Component {

  constructor( props ) {

    super( props );

  }

  render() {

    const {
      className,
      client,
      clientBackground,
      device,
      screen,
      text,
      title,
      titleId,
    } = this.props;

    const classes = classNames( 'projectTeaser section', { // 'section' is for fullpage.js plugin
      [className]: className ? true : null,
    });

    const stylesTitle = {};
    if ( clientBackground ) { stylesTitle.background = clientBackground; }

    return (
      <div className={ classes }>
        <h1 className="margin-bottom">{ client }</h1>
        <h5 className="margin-bottom-2-1 projectTeaser_title" style={ stylesTitle } id={ titleId }>{ title }</h5>
        <p className="projectTeaser_text" dangerouslySetInnerHTML={{ __html: text }} />
        { device ? ( <Device device={ device } screen={ screen } /> ) : null }
      </div>
    );

  }

}

// PropTypes

ProjectTeaser.propTypes = {
  className: PropTypes.string,
  client: PropTypes.string,
  clientBackground: PropTypes.string,
  device: PropTypes.string,
  screen: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  titleId: PropTypes.string,
};

ProjectTeaser.defaultProps = {

};

// Export

export default ProjectTeaser;
