// react libraries
import * as React from 'react';

// assets
import { ReactComponent as Check } from 'assets/images/check2.svg';
import { ReactComponent as Danger } from 'assets/images/danger.svg';
import { ReactComponent as Close } from 'assets/images/close.svg';

// Styles
import './Toast.scss';

export default (props: any) => {
  return (
    <div className={`toast${props.show ? ' toast--show' : ''}`} ref={props.ref}>
      <div
        className={`toast__wrapper${
          props.success ? ' toast__wrapper--success' : ''
        }`}
      >
        {props.success ? <Check /> : <Danger />}
      </div>
      <div className="toast__message-wrapper">
        <div className="toast__message-box">
          <div className="toast__message">
            <span>{props.message}</span>
          </div>
          <div className="toast__close-wrapper">
            <div className="toast__close-container">
              <button
                aria-label="Close"
                type="button"
                onClick={props.onClose}
                className="cls-btn"
              >
                <span className="_3hmsj">
                  <Close />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
