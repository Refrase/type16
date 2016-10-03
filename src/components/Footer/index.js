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
    stylesLogo.maxWidth = '70px';

    return (
      <div className="footer">
        <GridBlock columns="3" className="display-flex flexDirection-column-mobile justifyContent-center alignItems-center">
          <div className="span-3-mobile display-flex alignItems-center">
            <img src={ logoBlack } style={ stylesLogo } />
          </div>
          <div className="span-3-mobile display-flex justifyContent-center">
            <Button styling="secondary" linkTo="/">Projects</Button>
          </div>
          <div className="span-3-mobile display-flex justifyContent-flexEnd alignItems-center">
            <p className="fontSize-xsmall color-brandWhite">Copyright &copy; 2016</p>
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
