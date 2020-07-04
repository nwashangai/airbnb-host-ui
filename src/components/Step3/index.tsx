// react libraries
import * as React from 'react';

// assets
import { ReactComponent as Check } from 'assets/images/check.svg';

// Fixtures
import { amenities } from './fixtures';

// Styles
import 'react-dropdown/style.css';
import './Step3.scss';

const renderAmenities = ({ title, body, label, isChecked, onChange }: any) => (
  <div>
    <div className="step3__amenities-wrap">
      <div className="step3__amenities-main">
        <div className="step3__amenities-title">{title}</div>
        <div className="step3__amenities-description">{body}</div>
      </div>
      <div className="step3__amenities-select">
        <div className="step3__amenities-select-check">
          <button
            className={`step3__amenities-select-btn${
              isChecked ? ' step3__amenities-select-btn--checked' : ''
            }`}
            type="button"
            attributes-id={label}
            style={{ outline: 'none' }}
            onClick={onChange}
          >
            <span>
              <Check />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default (props: any) => {
  return (
    <div className="step3">
      <div className="step2__title">
        <span>What amenities do you offer?</span>
      </div>
      <div className="step2__instruction">
        <span>
          These are just the amenities guests usually expect, but you can add
          even more after you publish.
        </span>
      </div>
      {amenities.map((item: any) =>
        renderAmenities({
          title: item.title,
          body: item.body,
          label: item.label,
          isChecked: props.defaultValues[item.label],
          onChange: props.onChange
        })
      )}
    </div>
  );
};
