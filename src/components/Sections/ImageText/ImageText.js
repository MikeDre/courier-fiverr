import React from 'react';
import PropTypes from 'prop-types';

import './image-text.scss';

function createMarkup(data) {
  return { __html: data };
}

class ImageText extends React.Component {

  /*
  * @summary: dangerouslySetInnerHTML required here to output ImageText content
  * @todo: Currently pulling from static file (winners.json), replace with headless CMS data
  */
  /* eslint react/no-danger: 0 */

  render() {
    return (
      <div className={`image-text`}>
        <div className="uk-grid uk-grid-collect" data-uk-grid>
          <div className="uk-width-1-2@m image-text__image uk-background-cover">
            [ image here ]
          </div>
          <div className="uk-width-1-2@m image-text__content ">
            <div className={`image-text__header u-bold uk-margin-medium-bottom uk-text-${this.props.alignContent}`}>
              {this.props.header}
            </div>
            <div
              className={`image-text__content uk-text-${this.props.alignContent}`}
              dangerouslySetInnerHTML={createMarkup(this.props.content)}
            >
              {this.props.text}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ImageText.defaultProps = {
  header: '',
  content: '',
};

ImageText.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string,
  content: PropTypes.string,
};

export default ImageText;
