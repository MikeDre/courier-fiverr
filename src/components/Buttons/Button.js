import React from 'react';
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
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <button
            className={`button`}
            type="button"
            style={buttonStyle}
          >
            {this.props.buttonText}
          </button>
        </a>
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
