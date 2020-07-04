import * as React from 'react';

import './tab.scss';

export default (props: any) => (
  <div className="tab">{React.Children.only(props.children)}</div>
);
