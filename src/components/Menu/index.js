// Style

import './index.scss';

// Lib

import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import $ from 'jquery';

// Components

import Icon from 'components/Icon';
import PageSection from 'components/PageSection';

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

    $( '.frame, #fp-nav' ).removeClass( 'menuOpen' );
    $( '#fp-nav' ).css({ transform: 'translateX(0)' });

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
              onClick={ (e) => this.goToPath(e, '/about') }
              className="menu_list_element_link">
              Philosophy</a>
          </li>
          <li className="menu_list_element">
            <a href="#"
              onClick={ (e) => this.goToPath(e, '/colab') }
              className="menu_list_element_link">
              Co-lab</a>
          </li>
        </ul>

        <Icon which="cross" className="menu_icon" onClick={ this.closeMenu } />

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
