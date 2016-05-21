// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

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
      clientId,
      text,
      title,
    } = this.props;

    const classes = classNames( 'project', {
      [className]: className ? true : null,
    });

    const stylesClient = {};
    if ( clientBackground ) { stylesClient.background = clientBackground; }

    return (
      <div className={ classes }>
        <h1 className="margin-bottom">{ title }</h1>
        <h5 className="margin-bottom-2-1 project_client" style={ stylesClient } id={ clientId }>{ client }</h5>
        <p className="project_text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    );

  }

}

// PropTypes

Project.propTypes = {
  clientBackground: PropTypes.string,
  className: PropTypes.string,
  client: PropTypes.string,
  clientId: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

Project.defaultProps = {

};

// Export

export default Project;
