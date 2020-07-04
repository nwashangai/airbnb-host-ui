// react libraries
import * as React from 'react';

// Constant
import { HOME_SCREEN, WIZARD_SCREEN } from 'constantValues';

// Components
import Header from 'components/Header';
import Step1 from 'components/Step1';
import Step2 from 'components/Step2';
import Step3 from 'components/Step3';
import Started from 'components/Started';
import Tab from 'components/Tab';
import Tabs from 'components/Tabs';
import Toast from 'components/Toast';

// utilities
import sendData from 'utilities/sendData';

// Initaial state
import { initialState } from './fixtures';

export default () => {
  const [state, setState] = React.useState(initialState);

  const handleOnChange = (event: any) => {
    if (event.value !== undefined) {
      console.log(state.hostData);
      setState({
        ...state,
        hostData: {
          ...state.hostData,
          [event.value]: event.label
        }
      });
    } else {
      const id = event.currentTarget.attributes['attributes-id'].value;
      setState({
        ...state,
        hostData: {
          ...state.hostData,
          [id]:
            typeof event.target.value === 'string'
              ? event.target.value
              : !state.hostData[id]
        }
      });
    }
  };

  const setGeoData = (data: any) => {
    setState({
      ...state,
      hostData: {
        ...state.hostData,
        address: data.name,
        city: data.county,
        state: data.region,
        country: data.country,
        zipCode: data.postal_code ? data.postal_code : state.hostData.zipCode
      }
    });
  };

  const updateCount = (
    direction: string,
    property: string,
    isArrangement?: boolean
  ) => {
    switch (direction) {
      case '+':
        if (isArrangement) {
          setState({
            ...state,
            hostData: {
              ...state.hostData,
              arrangements: {
                ...state.hostData.arrangements,
                [property]: state.hostData.arrangements[property] + 1
              }
            }
          });
        } else {
          setState({
            ...state,
            hostData: {
              ...state.hostData,
              [property]: state.hostData[property] + 1
            }
          });
        }

        break;

      case '-':
        if (isArrangement) {
          setState({
            ...state,
            hostData: {
              ...state.hostData,
              arrangements: {
                ...state.hostData.arrangements,
                [property]: state.hostData.arrangements[property] - 1
              }
            }
          });
        } else {
          setState({
            ...state,
            hostData: {
              ...state.hostData,
              [property]: state.hostData[property] - 1
            }
          });
        }
        break;

      default:
        break;
    }
  };

  const addArrangement = (property: any) => {
    setState({
      ...state,
      hostData: {
        ...state.hostData,
        arrangements: {
          ...state.hostData.arrangements,
          [property.label]: 1
        }
      }
    });
  };

  const isValid = (tab: number) => {
    switch (tab) {
      case 1:
        if (
          !state.hostData.address ||
          !state.hostData.state ||
          !state.hostData.city ||
          !state.hostData.zipCode
        ) {
          setState({
            ...state,
            showToast: true,
            success: false,
            toastMessage: 'You need to complete the fields to progress forward'
          });
          window.scrollTo(0, 0);
          return false;
        }
        return true;
      case 2:
        setState({
          ...state,
          isLoading: true
        });
        sendData(
          `${process.env.REACT_APP_BASE_URL}/add-apartment`,
          'POST',
          state.hostData
        )
          .then((response: any) => {
            setState({
              ...initialState,
              showToast: true,
              success: true,
              toastMessage: 'Your Apartment has been registered successfully',
              isLoading: false
            });
          })
          .catch((error: any) => {
            setState({
              ...state,
              showToast: true,
              success: false,
              toastMessage:
                'There was problem saving your data, please check your data',
              isLoading: false
            });
          });
        return true;

      default:
        return true;
    }
  };

  const closeToast = () =>
    setState({
      ...state,
      showToast: false
    });

  const validateStarter = () => {
    if (!state.hostData.location) {
      setState({
        ...state,
        showToast: true,
        success: false,
        toastMessage: 'You need to complete the fields to progress forward'
      });
    } else {
      setState({
        ...state,
        screen: WIZARD_SCREEN
      });
    }
  };

  const refresh = () =>
    setState({
      ...state,
      screen: HOME_SCREEN
    });

  return (
    <>
      <Header />
      <Toast
        show={state.showToast}
        success={state.success}
        onClose={closeToast}
        message={state.toastMessage}
      />
      {state.screen === HOME_SCREEN ? (
        <Started
          onChange={handleOnChange}
          defaultValues={state.hostData}
          next={validateStarter}
        />
      ) : (
        <Tabs isValidData={isValid} isLoading={state.isLoading} back={refresh}>
          <Tab>
            <Step1
              updateCount={updateCount}
              onChange={handleOnChange}
              addArrangement={addArrangement}
              defaultValues={state.hostData}
            />
          </Tab>
          <Tab>
            <Step2
              updateCount={updateCount}
              onChange={handleOnChange}
              defaultValues={state.hostData}
              setLocation={setGeoData}
            />
          </Tab>
          <Tab>
            <Step3
              updateCount={updateCount}
              onChange={handleOnChange}
              defaultValues={state.hostData}
            />
          </Tab>
        </Tabs>
      )}
    </>
  );
};
