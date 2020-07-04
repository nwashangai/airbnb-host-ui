// react libraries
import * as React from 'react';
import Dropdown from 'react-dropdown';
import ReactLoading from 'react-loading';

// assets
import { ReactComponent as Location } from 'assets/images/location.svg';

// Component
import TextInput from 'components/TextInput';

// utilities
import getData from 'utilities/sendData';

// Fixtures
import { countries } from './fixtures';

// Styles
import 'react-dropdown/style.css';
import './Step2.scss';

export default (props: any) => {
  const [isLoading, setState] = React.useState(false);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      setState(true);
      getData(
        `${
          process.env.REACT_APP_GEO_API +
          position.coords.latitude +
          ',' +
          position.coords.longitude
        }`
      )
        .then((response: any) => {
          props.setLocation(response.data[0]);
          setState(false);
        })
        .catch((error: any) => {
          setState(false);
        });
    });
  };

  return (
    <div className="step2">
      <div className="step2__title">
        <span>Where’s your place located?</span>
      </div>
      <div className="step2__instruction">
        <span>
          Guests will only get your exact address once they’ve booked a
          reservation.
        </span>
      </div>
      <div className="step2__get-location-wrapper">
        <button
          type="button"
          className="step2__location-btn"
          onClick={getLocation}
        >
          <div className="step2__location-content">
            {!isLoading ? (
              <>
                <div className="step2__location-ico-wrap">
                  <Location />
                </div>
                <div className="step2__location-text-wrap">
                  <div className="step2__location-text">
                    Use current location
                  </div>
                </div>
              </>
            ) : (
              <ReactLoading
                type="bubbles"
                color="#008489"
                height={29}
                width={40}
                className="step2__location-loading"
              />
            )}
          </div>
        </button>
      </div>
      <div className="step2__form-head">
        <div className="step2__form-head-text">or enter your address</div>
      </div>
      <div className="step2__input-wrap">
        <label>Country / Region</label>
        <Dropdown
          options={countries.map((country: any) => ({
            value: 'country',
            label: country.name
          }))}
          onChange={props.onChange}
          value={props.defaultValues.country}
          className="step1__dropdown"
        />
      </div>
      <div className="step2__input-wrap">
        <label>Street address</label>
        <TextInput
          attributes-id="address"
          value={props.defaultValues.address}
          onChange={props.onChange}
          isCircular
        />
        <div className="step2__hint">House name/number + street/road</div>
      </div>
      <div className="step2__input-wrap">
        <label>Apt, suite. (optional)</label>
        <TextInput
          attributes-id="typeOfHouse"
          value={props.defaultValues.typeOfHouse}
          onChange={props.onChange}
          isCircular
        />
        <div className="step2__hint">Apt., suite, building access code</div>
      </div>
      <div className="step2__input-wrap">
        <label>City</label>
        <TextInput
          attributes-id="city"
          value={props.defaultValues.city}
          onChange={props.onChange}
          isCircular
        />
      </div>
      <div className="step2__input-wrap">
        <label>State</label>
        <TextInput
          attributes-id="state"
          value={props.defaultValues.state}
          onChange={props.onChange}
          isCircular
        />
      </div>
      <div className="step2__input-wrap">
        <label>Zip code</label>
        <TextInput
          attributes-id="zipCode"
          value={props.defaultValues.zipCode}
          onChange={props.onChange}
          isCircular
        />
      </div>
    </div>
  );
};
