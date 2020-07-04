// react libraries
import * as React from 'react';

// Styles
import './Progress.scss';

export default (props: any) => {
  return (
    <div className="progress">
      <div
        className="progress__current"
        style={{ width: `${props.current}%`, height: '100%' }}
      />
    </div>
  );
};
