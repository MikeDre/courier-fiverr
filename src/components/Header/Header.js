import React from 'react';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Buttons/Button';

import './header.scss';

const header = () => (
  <div className="header">
    <div className="uk-container">
      <div className="uk-grid uk-grid-small uk-child-width-1-3" data-uk-grid>
        <div className="uk-flex uk-flex-top@m uk-flex-middle@s">
          <Button
            buttonColor="#ffffff"
            buttonTextColor="#000000"
            buttonText="Back to main site"
            buttonLink="https://couriermedia.co/"
          />
        </div>
        <div className="uk-text-center">
          <Logo />
        </div>
        <div className="uk-flex uk-flex-right uk-flex-top@m uk-flex-middle@s">
        </div>
      </div>
    </div>
  </div>
);

export default header;
