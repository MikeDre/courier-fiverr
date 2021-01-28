import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => <img src={props.image} alt={props.altText} data-uk-img />;

Image.defaultProps = {
  altText: '',
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default Image;
