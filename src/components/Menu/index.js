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

// Class

class Menu extends Component {

  constructor(props) {

    super(props);

    this.closeMenu = this.closeMenu.bind(this);
    this.goToPath = this.goToPath.bind(this);
    this.renderMenu = this.renderMenu.bind(this);

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
        <Icon which="cross" onClick={ this.closeMenu } />
        <ul className="menu_list">
          <li className="menu_list_element">
            <a href="#"
              onClick={ (e) => this.goToPath(e, '/about') }
              className="menu_list_element_link">
              About</a>
          </li>
        </ul>
      </div>
    );

  }

  render() {

    return (
      <CSSTransitionGroup
        component="div"
        transitionName="menuAnimation"
        transitionEnterTimeout={ 500 }
        transitionLeaveTimeout={ 500 }>
          { this.props.showingMenu ? this.renderMenu() : null }
      </CSSTransitionGroup>
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
