/* ----- Landing ----- */

// Styles

import './index.scss';
import './../../../../styles/vendor/fullpagejs.scss';

// Lib

import React, { Component } from 'react';
import $ from 'jquery';
import inViewport from 'in-viewport';
import { fullpage } from 'fullpage.js'; // it actually IS used

// Components

import Hero from 'components/Hero';
import Logo from 'components/Logo';
import Frame from 'components/Frame';
import ProjectTeaser from 'components/ProjectTeaser';

// Assets

import redMarkedsorienteringPhone from './assets/red-markedsorientering-phone.gif';

// Class

class Container extends Component {

  constructor(props) {

    super(props);

    this.projects = [
      {
        title: 'Digitalt Nyhedsbrev',
        client: 'RED Property Advisers',
        text: 'Man kan fremad se, at de har været udset til at læse, at der skal dannes par af ligheder. Dermed kan der afsluttes uden løse ender, og de kan optimeres fra oven af at formidles stort uden brug fra presse. I en kant af landet går der blandt om, at de vil sætte den over forbehold for tiden.',
        colorMain: '#e20613',
        device: 'iPhone',
        screen: redMarkedsorienteringPhone,
      },
      {
        title: 'Salgsbrochure',
        client: 'Nybolig',
        text: 'Man kan fremad se, at de har været udset til at læse, at der skal dannes par af ligheder. Dermed kan der afsluttes uden løse ender, og de kan optimeres fra oven af at formidles stort uden brug fra presse. I en kant af landet går der blandt om, at de vil sætte den over forbehold for tiden.',
        colorMain: '#03975F',
        device: null,
        screen: null,
      },
      {
        title: 'Hjemmeside',
        client: 'Ledelseshøjskolen',
        text: 'Man kan fremad se, at de har været udset til at læse, at der skal dannes par af ligheder. Dermed kan der afsluttes uden løse ender, og de kan optimeres fra oven af at formidles stort uden brug fra presse. I en kant af landet går der blandt om, at de vil sætte den over forbehold for tiden.',
        colorMain: '#ff5000',
        device: null,
        screen: null,
      },
    ];

    this.colorsMorph = [];
    this.projectClients = ['Welcome'];

    this.checkForInViewport = this.checkForInViewport.bind(this);
    this.snapSections = this.snapSections.bind(this);

  }

  componentDidMount() {

    this.checkForInViewport();
    this.snapSections();

  }

  componentWillUnmount() {

    $( window ).off( 'resize', this.checkForInViewport );
    $( window ).off( 'scroll', this.checkForInViewport );

    $.fn.fullpage.destroy('all'); // Destroy fullpage-plugin AND its added styles and markup

  }

  snapSections() {

    // const frame = $( '.frame' ); // Not necessary anymore - see function below

    $('#fullpage').fullpage({
      keyboardScrolling: true,
      navigation: true,
      navigationPosition: 'left',
      navigationTooltips: this.projectClients,
      slidesNavigation: null,
      slidesNavPosition: 'bottom',
      controlArrows: null,
      normalScrollElements: '.device', // Normal scroll active when mouse is over these
      scrollBar: true,
      fitToSectionDelay: 300,
      // onLeave: (index, nextIndex) => {
      // Changing the color of Frame on section change - not necessary anymore after adding the 'scrollBar' option
      //   for ( let i = 0; i < this.colorsMorph.length + 2; i++ ) { // fullpage.js index starting at 1 + 1 is startpage (therefore '+2')
      //     if (nextIndex === 1) {
      //       frame.css({ 'border-color': 'white' });
      //     } else if (i === nextIndex) {
      //       frame.css({ 'border-color': this.colorsMorph[i - 2] }); // fullpage.js index starting at 1 + 1 is startpage (therefore '-2')
      //     }
      //   }
      // },
    });

  }

  checkForInViewport() {

    const projectsOnPage = $( '.projectTeaser' );

    for ( let i = 0; i < projectsOnPage.length; i++ ) {
      const projectTitle = document.getElementById( 'projectTeaser_title-' + i );

      inViewport(projectTitle, { offset: -100 }, () => {
        $( projectTitle ).addClass( 'projectTeaser_title-shown' );
      });
    }

  }

  renderProject(project, index) {

    this.colorsMorph.push( project.colorMain ); // Create array with all project colors for Frame color-morphing
    this.projectClients.push( project.client ); // Create array with all project clients

    const id = 'projectTeaser_title-' + index;

    return (
      <ProjectTeaser key={ index }
        client={ project.client }
        clientBackground={ project.colorMain }
        device={ project.device }
        screen={ project.screen }
        text={ project.text }
        title={ project.title }
        titleId={ id } />
    );

  }

  render() {

    return (
      <div className="page-landing">

        <div id="fullpage">
          <Hero>
            <Logo animateOnScroll />
          </Hero>
          { this.projects.map( (project, index) => this.renderProject(project, index) )}
        </div>

        <Frame colorsMorph={ this.colorsMorph } color="rgba(255,255,255,0.97)" />

      </div>
    );

  }

}

// PropTypes

Container.propTypes = {

};

Container.defaultProps = {

};

// Export

export default Container;
