import React from 'react';
import { Link } from 'gatsby';
import LogoImg from '../../images/courier-partnerships-logo.svg';

const Logo = () => (
  <div>
    <Link to="/">
      <img src={LogoImg} alt="Courier Partnership Logo" width="250" />
    </Link>
  </div>
);

export default Logo;
