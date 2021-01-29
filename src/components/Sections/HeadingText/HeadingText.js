import React from 'react';
import PropTypes from 'prop-types';

import './heading-text.scss';

function createMarkup(data) {
  return { __html: data };
}

class HeadingText extends React.Component {

  /*
  * @summary: dangerouslySetInnerHTML required here to output HeadingText content
  * @todo: Rename this component to something more suitable
  */
  /* eslint react/no-danger: 0 */

  render() {
    const contentHeaderStyle = {
      color: this.props.headerColor,
    };
    return (
      <div className="heading-text">
        <div className="uk-grid uk-grid-collapse" data-uk-grid>
          <div className="uk-width-1-2@m">
            <div uk-sticky="offset: 0; bottom: true">
              <h3 className={`heading-text__header u-bold ${this.props.image ? 'uk-margin-medium-bottom' : ''}`} style={contentHeaderStyle}>{this.props.header}</h3>
              <img src={this.props.image} alt={this.props.imageAltText} />
            </div>
          </div>
          <div className="uk-width-1-2@m">
            <div className="heading-text__content-wrapper">
              <div
                className="heading-text__content"
                dangerouslySetInnerHTML={createMarkup(this.props.content)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HeadingText.defaultProps = {
  image: '',
  imageAltText: '',
  header: '',
  content: '',
  backgroundColor: '#ff8a3d',
  headerColor: '#ff8a3d',
};

HeadingText.propTypes = {
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  headerColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default HeadingText;
