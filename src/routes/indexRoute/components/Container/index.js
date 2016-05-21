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
import PageSection from 'components/PageSection';
import Project from 'components/Project';

// Images

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
      },
      {
        title: 'Salgsbrochure',
        client: 'Nybolig',
        text: 'Man kan fremad se, at de har været udset til at læse, at der skal dannes par af ligheder. Dermed kan der afsluttes uden løse ender, og de kan optimeres fra oven af at formidles stort uden brug fra presse. I en kant af landet går der blandt om, at de vil sætte den over forbehold for tiden.',
        colorMain: '#03975F',
      },
    ];

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
      const projectClient = document.getElementById( 'project_client-' + i );

      inViewport(projectClient, { offset: -100 }, () => {
        $( projectClient ).addClass( 'project_client-shown' );
        console.log('inview');
      });
    }

  }

  renderProject(project, index) {

    const id = 'project_client-' + index;

    return (
      <Frame key={ index } color={ project.colorMain }>
        <PageSection columns="3">
          <Project
            title={ project.title }
            client={ project.client }
            clientId={ id }
            clientBackground={ project.colorMain }
            text={ project.text } />
        </PageSection>
      </Frame>
    );

  }

  render() {

    return (
      <div className="page-landing">

        <Hero>
          <Logo animateOnScroll />
        </Hero>

        { this.projects.map( (project, index) => this.renderProject(project, index) )}

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
