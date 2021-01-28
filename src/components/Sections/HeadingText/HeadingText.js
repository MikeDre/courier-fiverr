import React from 'react';
import PropTypes from 'prop-types';

import './heading-text.scss';

function createMarkup(data) {
  return { __html: data };
}

class HeadingText extends React.Component {

  /*
  * @summary: dangerouslySetInnerHTML required here to output HeadingText content
  * @todo: Currently pulling from static file (winners.json), replace with headless CMS data
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
            <h3 uk-sticky="offset: 0; bottom: true" className="heading-text__header u-bold uk-margin-medium-bottom" style={contentHeaderStyle}>{this.props.header}</h3>
          </div>
          <div className="uk-width-1-2@m">
            <div className="heading-text__content-wrapper">
              <div
                className="heading-text__content"
                dangerouslySetInnerHTML={createMarkup(this.props.content)}
              >
                {this.props.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HeadingText.defaultProps = {
  header: '',
  content: '',
  backgroundColor: '#de8c57',
  headerColor: '#de8c57',
};

HeadingText.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string,
  content: PropTypes.string,
  headerColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default HeadingText;