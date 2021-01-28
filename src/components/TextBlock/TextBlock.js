import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './text-block.scss';

class TextBlock extends React.Component {

  /*
  * @summary: dangerouslySetInnerHTML required here to output TextBlock contents
  */
  /* eslint react/no-danger: 0 */
  render() {
    return (
      <div>
        <h1 className="text-block__heading uk-margin-bottom">{this.props.heading}</h1>
        <div className="text-block__content" dangerouslySetInnerHTML={createMarkup(this.props.content)} />
      </div>
    );
  }
}

TextBlock.defaultProps = {
  content: '',
};

TextBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string,
};

export default TextBlock;
