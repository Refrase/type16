// Styles
import './index.scss';

// Libraries
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

// Components
import Button from 'components/Button';
import Device from 'components/Device';

// Assets
import ChevronRightCircleWhite from './../../data/assets/icons/chevron-right-circle-white.svg';
import ChevronRightCircleBlack from './../../data/assets/icons/chevron-right-circle-black.svg';

// Class
class Project extends Component {

  constructor( props ) {
    super( props );
  }

  render() {
    const {
      className,
      client,
      clientBackground,
      colorTextOverlay,
      devices,
      imageCover,
      screens,
      text,
      title,
      url,
    } = this.props;

    const classes = classNames( 'project section', { // 'section' is for fullpage.js plugin
      [className]: className ? true : null,
    });

    const stylesTitle = {};
    if ( clientBackground ) { stylesTitle.background = clientBackground; }

    const imageCoverCSS = { backgroundImage: `url( ${imageCover} )` };
    const overlayCSS = { backgroundColor: clientBackground };

    return (
      <div className={ classes } style={ imageCoverCSS }>
        <div className="project_inner">
          { client ? ( <h1 className="project_client margin-bottom-2-1">{ client }</h1> ) : null }
          { title ? ( <h5 className="project_title margin-bottom-2-1" style={ stylesTitle } id="project_title">{ title }</h5> ) : null }
          { text ? ( <p className="project_text margin-bottom-4-1" dangerouslySetInnerHTML={{ __html: text }} /> ) : null }
          { devices && screens ? ( <Device device={ devices.phone } screen={ screens.phone } /> ) : null }
          { devices && screens ? ( <Device device={ devices.tablet } screen={ screens.tablet } /> ) : null }
          { url ? (
            <Link to={ url }>
              <img className="project_link" src={ colorTextOverlay === 'white' ? ChevronRightCircleWhite : ChevronRightCircleBlack } width="56" />
            </Link>
          ) : null }
        </div>
        { clientBackground ? ( <div className="project_overlay" style={ overlayCSS } /> ) : null }
      </div>
    );
  }
}

// PropTypes
Project.propTypes = {
  className: PropTypes.string,
  client: PropTypes.string,
  clientBackground: PropTypes.string,
  colorTextOverlay: PropTypes.string,
  devices: PropTypes.object,
  imageCover: PropTypes.string,
  screens: PropTypes.object,
  text: PropTypes.string,
  title: PropTypes.string,
  titleId: PropTypes.string,
  url: PropTypes.string,
};

// Export
export default Project;
