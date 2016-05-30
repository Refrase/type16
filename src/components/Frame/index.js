// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import $ from 'jquery';

// Class

class Frame extends Component {

  constructor(props) {

    super(props);

    this.state = {
      scrollTop: $( window ).scrollTop(),
    };

    this.changeColorOnScroll = this.changeColorOnScroll.bind(this);

  }

  componentDidMount() {

    if ( this.props.colorsMorph ) {
      $( window ).on( 'scroll', () => {
        setTimeout( this.changeColorOnScroll, 300 );
      });
    }

  }

  componentWillUnmount() {

    $( window ).off( 'scroll', this.changeColorOnScroll );

  }

  changeColorOnScroll() {

    const windowHeight = $( window ).height();
    const frame = $( '.frame' );
    const newScrollTop = $( window ).scrollTop();

    for ( let i = 0; i < this.props.colorsMorph.length; i++ ) {
      const calcSection = (windowHeight / 2) * (i + 1) + (windowHeight / 2 * i); // Change color when halfway down each section

      if ( newScrollTop > this.state.scrollTop && newScrollTop > calcSection ) {
        frame.css({ 'border-color': this.props.colorsMorph[i] });
      } else if ( newScrollTop < this.state.scrollTop ) {
        frame.css({ 'border-color': 'white' });
      }
    }

    this.setState({
      scrollTop: newScrollTop,
    });

  }

  render() {

    const {
      children,
      className,
      color,
      fixed,
    } = this.props;

    const styles = {};
    if ( color ) { styles.borderColor = color; }

    const classes = classnames( 'frame', {
      'frame-fixed': fixed || this.props.colorsMorph ? true : null,
      [className]: className ? true : null,
    });

    return (
      <div className={ classes } style={ styles }>
        { children }
      </div>
    );

  }

}

// PropTypes

Frame.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  colorsMorph: PropTypes.array,
  fixed: PropTypes.bool,
};

Frame.defaultProps = {

};

// Export

export default Frame;
