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
      imageCover,
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

    const imageCoverCSS = { backgroundImage: `url( ${imageCover} )` };

    return (
      <div className={ classes } style={ imageCoverCSS }>
        <div className="projectTeaser_inner">
          <h1 className="margin-bottom fontFamily-display fontSize-display fontWeight-normal">{ client }</h1>
          <h5 className="projectTeaser_title margin-bottom-2-1" style={ stylesTitle } id={ titleId }>{ title }</h5>
          <p className="projectTeaser_text margin-bottom-4-1" dangerouslySetInnerHTML={{ __html: text }} />
          { device ? (
          <Device device={ device } screen={ screen } />
          ) : null }
        </div>
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
  imageCover: PropTypes.string,
  screen: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  titleId: PropTypes.string,
};

ProjectTeaser.defaultProps = {

};

// Export

export default ProjectTeaser;
