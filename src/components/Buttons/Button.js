import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './button.scss';


class Button extends React.Component {
  render() {

    const buttonStyle = {
      color: this.props.buttonTextColor,
      backgroundColor: this.props.buttonColor,
    };

    return (
      <div>
        <Link to={this.props.link}>
          <button
            className={`button`}
            type="button"
            style={buttonStyle}
          >
            {this.props.buttonText}
          </button>
        </Link>
      </div>
    );
  }
}

Button.defaultProps = {
  buttonColor: 'black',
  buttonTextColor: 'white',
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
};

export default Button;
