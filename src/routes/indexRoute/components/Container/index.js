/* ----- Landing ----- */

// Styles

import './index.scss';

// Lib

import React, { Component } from 'react';
import $ from 'jquery';
import inViewport from 'in-viewport';

// Components

import Hero from 'components/Hero';
import Logo from 'components/Logo';
import Frame from 'components/Frame';
import Project from 'components/Project';

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
        title: 'Test',
        client: 'Testelse',
        text: 'Man kan fremad se, at de har været udset til at læse, at der skal dannes par af ligheder. Dermed kan der afsluttes uden løse ender, og de kan optimeres fra oven af at formidles stort uden brug fra presse. I en kant af landet går der blandt om, at de vil sætte den over forbehold for tiden.',
        colorMain: '#0055aa',
        device: null,
        screen: null,
      },
    ];

    this.colorsMorph = [];

    this.checkForInViewport = this.checkForInViewport.bind(this);

  }

  componentDidMount() {

    this.checkForInViewport();

  }

  componentWillUnmount() {

    $( window ).off( 'resize', this.checkForInViewport );
    $( window ).off( 'scroll', this.checkForInViewport );

  }

  checkForInViewport() {

    const projectsOnPage = $( '.project' );

    for ( let i = 0; i < projectsOnPage.length; i++ ) {
      const projectTitle = document.getElementById( 'project_title-' + i );

      inViewport(projectTitle, { offset: -100 }, () => {
        $( projectTitle ).addClass( 'project_title-shown' );
      });
    }

  }

  renderProject(project, index) {

    this.colorsMorph.push( project.colorMain );

    const id = 'project_title-' + index;

    return (
      <Project key={ index }
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

          <Hero>
            <Logo animateOnScroll />
          </Hero>

          { this.projects.map( (project, index) => this.renderProject(project, index) )}

          <Frame colorsMorph={ this.colorsMorph } />

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
