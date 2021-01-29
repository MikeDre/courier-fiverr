import React from 'react';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Buttons/Button';

import './header.scss';

const header = () => (
  <div className="header">
    <div className="uk-container">
      <div className="uk-grid uk-grid-small" data-uk-grid>
        <div className="uk-width-1-3@s uk-width-1-5 uk-flex uk-flex-top@m uk-flex-middle@s">
          <div className="uk-visible@s">
            <Button
              buttonColor="#ffffff"
              buttonTextColor="#000000"
              buttonText="Back to main site"
              link="https://couriermedia.co/"
            />
          </div>
        </div>
        <div className="uk-width-1-3@s uk-width-3-5 uk-text-center">
          <Logo />
        </div>
        <div className="uk-width-1-3@s uk-width-1-5 uk-flex uk-flex-right uk-flex-top@m uk-flex-middle@s">
        </div>
      </div>
    </div>
  </div>
);

export default header;
