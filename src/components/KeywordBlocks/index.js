// Styles
import './index.scss';

// Libraries
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// Components
import GridBlock from 'components/GridBlock';

// Class
class KeywordBlocks extends Component {

  constructor(props) { super(props); }

  render() {

    const {
      words,
      colors,
      textCenter,
    } = this.props;

    const classesBlock = classnames( 'keywordBlocks_block', {
      'keywordBlocks_block-textCenter': textCenter ? true : null,
    });

    const styles = [{}, {}, {}];
    if ( colors ) { styles[0].background = colors[0]; }
    if ( colors ) { styles[1].background = colors[1]; }
    if ( colors ) { styles[2].background = colors[2]; }

    // Map out the three keywords - with each of the three main colors as background
    // Wrap in GridBlock depending on if the text should be centered
    return (
      <div className="keywordBlocks">
        { words.map( (word, index) => (
          <div key={ index } className={ classesBlock } style={ styles[index] }>
            { !textCenter ? (
              <GridBlock><h1>{ word }</h1></GridBlock>
            ) : (
              <h1>{ word }</h1>
            )}
          </div>
        ))}
      </div>
    );

  }

}

// PropTypes
KeywordBlocks.propTypes = {
  children: PropTypes.node,
  words: PropTypes.array,
  colors: PropTypes.array,
  textCenter: PropTypes.bool,
};

// Export
export default KeywordBlocks;
