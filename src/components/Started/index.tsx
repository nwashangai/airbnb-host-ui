// react libraries
import * as React from 'react';
import Dropdown from 'react-dropdown';

// Components
import Button from 'components/Button';
import TextInput from 'components/TextInput';

// Fixtures
import { typesOfRoom, guests } from './fixtures';

// Styles
import 'react-dropdown/style.css';
import './Started.scss';

export default (props: any) => {
  return (
    <div className="started">
      <div className="started__wrapper">
        <div className="started__intro">
          Let's get started listing your space.
        </div>
        <div className="started__step">STEP 1</div>
        <div className="started__description">
          What kind of place do you have?
        </div>
        <div className="started__form">
          <Dropdown
            options={typesOfRoom}
            onChange={props.onChange}
            value={props.defaultValues.typeOfRoom}
            className="started__dropdown null"
          />
          <Dropdown
            options={guests}
            onChange={props.onChange}
            value={props.defaultValues.numberOfGuests}
            className="started__dropdown"
          />
          <TextInput
            attributes-id="location"
            placeholder="Location"
            value={props.defaultValues.location}
            onChange={props.onChange}
          />
          <Button
            classes="started__btn"
            name="Continue"
            isActive
            onClick={props.next}
          />
        </div>
      </div>
    </div>
  );
};
