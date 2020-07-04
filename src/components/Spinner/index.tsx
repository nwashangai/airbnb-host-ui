// react libraries
import * as React from 'react';

// Interface
import { SpinnerProps } from './interface';

// Styles
import './Spinner.scss';

export default ({ classes }: SpinnerProps) => {
  return <div className={`spinner ${classes ? classes : ''}`}></div>;
};
