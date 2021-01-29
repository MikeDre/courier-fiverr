import React from 'react';
import PropTypes from 'prop-types';

import QuotesShape from '../../../images/quotes.svg';

import './quote.scss';

class Quote extends React.Component {
  render() {

    const quoteColorStyle = {
      color: this.props.quoteColor,
    };

    const authorColorStyle = {
      color: this.props.authorColor,
    };

    const quoteBackgroundStyle = {
      backgroundColor: this.props.backgroundColor,
    };

    return (
      <div className="quote__wrapper" style={quoteBackgroundStyle}>
        <div className="uk-grid" data-uk-grid>
          <div className="uk-width-2-3@m">

            <blockquote
              className={`quote ${this.props.author ? 'uk-margin-medium-bottom' : ''}`}
              style={quoteColorStyle}
            >
              {this.props.quote}
            </blockquote>

            {this.props.author ? (
              <div className="quote__author" style={authorColorStyle}>
                {this.props.author}
              </div>
            ) : ''}

          </div>
          <div className="uk-width-1-3@m">
            <div className="quote__quote-shape">
              <img src={QuotesShape} alt="Large double quotes" />
            </div>
            <div className="quote__rounded-rectangle-shape"></div>
          </div>
        </div>
      </div>
    );
  }
}

Quote.defaultProps = {
  author: '',
  backgroundColor: '#e5a842',
  quoteColor: '#1f2a47',
  authorColor: '#ffffff',
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
  quoteColor: PropTypes.string,
  authorColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Quote;
