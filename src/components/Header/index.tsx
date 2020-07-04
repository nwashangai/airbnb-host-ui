// react libraries
import * as React from 'react';

// logo
import { ReactComponent as Logo } from 'assets/images/logo.svg';

// Styles
import './Header.scss';

export default () => {
  return (
    <div className="header">
      <Logo className="header__logo" />
    </div>
  );
};
