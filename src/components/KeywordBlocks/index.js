// Styles

import './index.scss';

// Libraries

import React, { Component, PropTypes } from 'react';

// Class

class KeywordBlocks extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    const {
      words,
      colors,
    } = this.props;

    const styles = [{}, {}, {}];
    if ( colors ) { styles[0].background = colors[0]; }
    if ( colors ) { styles[1].background = colors[1]; }
    if ( colors ) { styles[2].background = colors[2]; }

    return (
      <div className="keywordBlocks">
        <div className="keywordBlocks_block" style={ styles[0] }><h1>{ words[0] }</h1></div>
        <div className="keywordBlocks_block" style={ styles[1] }><h1>{ words[1] }</h1></div>
        <div className="keywordBlocks_block" style={ styles[2] }><h1>{ words[2] }</h1></div>
      </div>
    );

  }

}

// PropTypes

KeywordBlocks.propTypes = {
  children: PropTypes.node,
  words: PropTypes.array,
  colors: PropTypes.array,
};

KeywordBlocks.defaultProps = {

};

// Export

export default KeywordBlocks;
