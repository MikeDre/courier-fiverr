import React from 'react';
import Logo from '../../components/Logo/Logo';

const header = () => (
  <div className="uk-margin-medium-top uk-margin-large-bottom">
    <div className="uk-container">
      <div className="uk-grid uk-grid-small uk-child-width-1-3" data-uk-grid>
        <div className="uk-flex uk-flex-top@m uk-flex-middle@s">
          [ Back to main site ]
        </div>
        <div>
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
