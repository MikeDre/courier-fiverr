import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import PigeonFiverImg from '../../images/pigeon-fiverr.svg';
import './hero.scss';
class Hero extends React.Component {
  render() {
    const imageStyle = {
      backgroundImage: `url('${this.props.image}')`,
    };

    return (
      <div className="hero uk-background-cover" style={imageStyle}>
        <div className="hero__header">
          <Header />
        </div>
        <div className="hero__fiverr-wrapper uk-flex uk-flex-center">
          <div className="hero__fiverr">
            <img src={PigeonFiverImg} alt="Courier Fiverr Logo" width="250" />
          </div>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
};


export default Hero;
