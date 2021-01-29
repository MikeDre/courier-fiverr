import React from 'react';
import PropTypes from 'prop-types';

import './image-text.scss';

function createMarkup(data) {
  return { __html: data };
}

class ImageText extends React.Component {

  /*
  * @summary: dangerouslySetInnerHTML required here to output ImageText content
  */
  /* eslint react/no-danger: 0 */

  render() {
    const imageStyle = {
      backgroundImage: `url('${this.props.image}')`,
    };

    const contentHeaderStyle = {
      color: this.props.headerColor,
    };

    const contentBackgroundStyle = {
      backgroundColor: this.props.backgroundColor,
    };

    return (
      <div className="image-text">
        <div className="uk-grid uk-grid-collapse" data-uk-grid>
          <div className="uk-width-1-2@m image-text__image uk-background-cover" style={imageStyle}>
          </div>
          <div className="uk-width-1-2@m" style={contentBackgroundStyle}>
            <div className="image-text__content-wrapper">
              <div className={`uk-text-${this.props.alignContent}`}>
                <h3 className="image-text__header u-bold uk-margin-medium-bottom" style={contentHeaderStyle}>{this.props.header}</h3>
              </div>
              <div
                className={`image-text__content uk-text-${this.props.alignContent}`}
                dangerouslySetInnerHTML={createMarkup(this.props.content)}
              />
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
  backgroundColor: '#de8c57',
  headerColor: '#884689',
};

ImageText.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string,
  content: PropTypes.string,
  headerColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default ImageText;
