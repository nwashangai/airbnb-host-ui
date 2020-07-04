// react libraries
import * as React from 'react';

// assets
import { ReactComponent as Minus } from 'assets/images/minus.svg';
import { ReactComponent as Plus } from 'assets/images/plus.svg';

// Utilities
import classNameFormatter from 'utilities/classNameFormatter';

// Styles
import './Counter.scss';

export default (props: any) => {
  const classNames = classNameFormatter({
    counter__update: true,
    'counter__update-disabled':
      props.min !== undefined ? props.count <= props.min : false
  });
  return (
    <div className="counter">
      <div className="counter__cell counter__minus">
        <button
          className={classNames}
          type="button"
          style={{ outline: 'none' }}
          disabled={props.min !== undefined ? props.count <= props.min : false}
          onClick={() =>
            props.updateCounter('-', props.counter, props.isArrangement)
          }
        >
          <span>
            <Minus />
          </span>
        </button>
      </div>
      <div className="counter__cell counter__count">
        <span>{props.count}</span>
      </div>
      <div className="counter__cell counter__plus">
        <button
          className="counter__update"
          type="button"
          style={{ outline: 'none' }}
          onClick={() =>
            props.updateCounter('+', props.counter, props.isArrangement)
          }
        >
          <span>
            <Plus />
          </span>
        </button>
      </div>
    </div>
  );
};
