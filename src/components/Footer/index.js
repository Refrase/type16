// Styles
import './index.scss';

// Libraries
import React, { Component } from 'react';

// Components
import GridBlock from 'components/GridBlock';
import Button from 'components/Button';

// Assets
import logoBlack from './assets/logo-type16-black.svg';

// Class
class Footer extends Component {

  constructor(props) { super(props); }

  render() {
    const stylesLogo = {};
    stylesLogo.opacity = 0.05;
    stylesLogo.maxWidth = '100px';

    const stylesCopyright = {};
    stylesCopyright.opacity = 0.1;

    return (
      <div className="footer">
        <GridBlock columns="3">
          <div><img src={ logoBlack } style={ stylesLogo } /></div>
          <div className="display-flex justifyContent-center">
            <Button styling="secondary" linkTo="/">Andre projekter</Button>
          </div>
          <div className="display-flex justifyContent-flexEnd">
            <p style={ stylesCopyright }>Copyright &copy; 2016</p>
          </div>
        </GridBlock>
      </div>
    );
  }
}

// PropTypes
Footer.propTypes = {};

// Export
export default Footer;
