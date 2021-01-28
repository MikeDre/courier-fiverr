import React from 'react';
import Logo from '../../components/Logo/Logo';

import './header.scss';

const header = () => (
  <div className="header">
    <div className="uk-container">
      <div className="uk-grid uk-grid-small uk-child-width-1-3" data-uk-grid>
        <div className="uk-flex uk-flex-top@m uk-flex-middle@s">
          [ Back to main site ]
        </div>
        <div className="uk-text-center">
          <Logo />
        </div>
        <div className="uk-flex uk-flex-right uk-flex-top@m uk-flex-middle@s">
          [ Navigation ]
        </div>
      </div>
    </div>
  </div>
);

export default header;
