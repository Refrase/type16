// Style
import './index.scss';

// Lib
import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

// Components
import Icon from 'components/Icon';

// Actions
import { closeMenu } from 'ducks/ui/menu';

// Assets
import CrossWhite from './../../data/assets/icons/cross-shadow-white.svg';

// Class
class Menu extends Component {

  constructor(props) {
    super(props);

    this.closeMenu = this.closeMenu.bind(this);
    this.goToPath = this.goToPath.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  componentDidUpdate() {
    if ( this.props.showingMenu ) {
      document.body.style.overflow = 'hidden';
      console.log('nount');
    }
  }

  closeMenu(e) {
    e.preventDefault();
    closeMenu(this.props.dispatch);
  }

  goToPath(e, path) {
    e.preventDefault();
    hashHistory.push(path);
  }

  renderMenu() {
    return (
      <div className="menu">
        <ul className="menu_list">
          <li className="menu_list_element">
            <a href="#"
              onClick={ (e) => this.goToPath(e, '/') }
              className="menu_list_element_link">
              Projects</a>
          </li>
          <li className="menu_list_element">
            <a href="#"
              onClick={ (e) => this.goToPath(e, '/type16') }
              className="menu_list_element_link">
              TYPE16</a>
          </li>
        </ul>
        <Icon which="cross" className="menu_icon" onClick={ this.closeMenu } />
        { /* <img className="menu_icon" src={ CrossWhite } width="24" /> */ }
      </div>
    );
  }

  render() {
    const { showingMenu } = this.props;
    return (
      <div>
        <CSSTransitionGroup
          transitionName="menuAnimation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={100}>
          { showingMenu ? ( this.renderMenu() ) : null }
        </CSSTransitionGroup>
      </div>
    );
  }
}

// propTypes
Menu.propTypes = {
  dispatch: PropTypes.func,
  showingMenu: PropTypes.bool,
};

// Export
export default Menu;
