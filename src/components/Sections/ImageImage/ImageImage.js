import React from 'react';
import PropTypes from 'prop-types';

import './image-image.scss';

class ImageImage extends React.Component {
  render() {

    const imageLeftStyle = {
      backgroundImage: `url('${this.props.imageLeft}')`,
    };

    const backgroundStyle = {
      backgroundColor: this.props.backgroundColor,
    };

    return (
      <div className="image-image uk-padding-large" style={backgroundStyle}>
        <div className="uk-grid uk-grid-collapse" data-uk-grid>
          <div className="uk-width-1-2@m">
            <div className="image-image__image--left uk-background-cover" style={imageLeftStyle} />
          </div>
          <div className="uk-width-1-2@m">
            <div className="image-image__content-wrapper">
              <div className="image-image__image--right">
                <img src={this.props.imageRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ImageImage.defaultProps = {
  backgroundColor: '#d77472',
};

ImageImage.propTypes = {
  imageLeft: PropTypes.string.isRequired,
  imageRight: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export default ImageImage;
