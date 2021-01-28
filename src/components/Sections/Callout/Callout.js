import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Button from '../../../components/Button/Button';

import './callout.scss';

function createMarkup(data) {
  return { __html: data };
}

class Callout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasButton: (this.props.buttonText.length > 0),
    };
  }

  /*
  * @summary: dangerouslySetInnerHTML required here to output Winner's biography
  * @todo: Currently pulling from static file (winners.json), replace with headless CMS data
  */
  /* eslint react/no-danger: 0 */
  render() {

    const contentBackgroundStyle = {
      backgroundColor: this.props.backgroundColor,
    };

    return (
      <div className="callout__wrapper" style={contentBackgroundStyle}>
        <div className={`callout uk-flex uk-flex-${this.props.alignContent}`}>
          <div className="callout__content">
            <div
              className={`
                callout__header u-bold
                ${this.props.buttonText || this.props.content ? ' uk-margin-medium-bottom' : ' '}
                uk-text-${this.props.alignContent}
              `}
            >
              {this.props.header}
            </div>
            <div
              className={`callout__text uk-text-${this.props.alignContent}`}
              dangerouslySetInnerHTML={createMarkup(this.props.content)}
            />
            {this.state.hasButton ? (
              <Button
                text={this.props.buttonText}
                link={this.props.buttonLink}
              />
            ) : ''}
          </div>
        </div>
      </div>
    );
  }
}

Callout.defaultProps = {
  alignContent: 'center',
  header: '',
  content: '',
  buttonText: '',
  buttonLink: '',
  backgroundColor: '#ffffff',
};

Callout.propTypes = {
  alignContent: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Callout;
