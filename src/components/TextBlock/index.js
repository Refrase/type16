// Styles
import './index.scss';

// Libraries
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// Class
class TextBlock extends Component {

  constructor(props) { super(props); }

  render() {

    const {
      className,
      headline,
      text,
    } = this.props;

    const classesBlock = classnames( 'textBlock', { [className]: className ? true : null });

    return (
      <div className={ classesBlock }>
        <h1 className="margin-bottom">{ headline }</h1>
        <p>{ text }</p>
      </div>
    );

  }

}

// PropTypes
TextBlock.propTypes = {
  className: PropTypes.string,
  headline: PropTypes.string,
  text: PropTypes.string,
};

// Export
export default TextBlock;
