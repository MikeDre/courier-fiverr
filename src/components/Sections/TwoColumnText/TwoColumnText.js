import React from 'react';
import PropTypes from 'prop-types';

import './two-column-text.scss';

function createMarkup(data) {
  return { __html: data };
}

class TwoColumnText extends React.Component {

  /*
  * @summary: dangerouslySetInnerHTML required here to output TwoColumnText content
  * @todo: Currently pulling from static file (winners.json), replace with headless CMS data
  */
  /* eslint react/no-danger: 0 */
  render() {
    return (
      <div className="two-column-text__wrapper">
        <h2 class="two-column-text__header uk-margin-medium-bottom">{this.props.header}</h2>
        <div
          className="two-column-text"
          dangerouslySetInnerHTML={createMarkup(this.props.content)}
        />
      </div>
    );
  }
}

TwoColumnText.defaultProps = {
  header: '',
  content: '',
};

TwoColumnText.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
};

export default TwoColumnText;
