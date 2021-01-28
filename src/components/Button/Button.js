import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ text, link, color }) => (
  <div>
    <Link to={link}>
      <button
        className={`button u-font-primary u-medium u-background-color-${color} u-color-white`}
        type="button"
      >
        {text}
      </button>
    </Link>
  </div>
);

Button.defaultProps = {
  color: 'secondary',
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Button;
