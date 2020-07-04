// react libraries
import * as React from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';

// Components
import Button from 'components/Button';
import Progress from 'components/Progress';

// Styles
import './Tabs.scss';

export default ({
  children,
  isLoading,
  isValidData = (tab: number) => true,
  back = () => null
}: any) => {
  const [state, setState] = React.useState({
    currentTabIndex: 0
  });
  const HeaderLength = React.Children.toArray(children).length;

  const renderNext = () => {
    const { currentTabIndex } = state;
    if (isValidData(currentTabIndex)) {
      setState({
        currentTabIndex:
          currentTabIndex + 1 < HeaderLength
            ? currentTabIndex + 1
            : currentTabIndex
      });
    }
  };

  const renderPrevious = () => {
    const { currentTabIndex } = state;
    if (currentTabIndex <= 0) {
      back();
    } else {
      setState({ currentTabIndex: currentTabIndex - 1 });
    }
  };
  return (
    <div className="tabs">
      <div className="tabs__headings">
        <Progress
          current={
            ((state.currentTabIndex + 1) /
              React.Children.toArray(children).length) *
            100
          }
        />
      </div>
      <div className="tabs-content-container">
        {React.Children.toArray(children)[state.currentTabIndex]}
      </div>
      <div className="navigation-buttons">
        <div />
        <div className="navigation-buttons__buttons">
          <button
            className="navigation-buttons__buttons__back"
            onClick={renderPrevious}
            type="button"
            style={{ outline: 'none' }}
          >
            <Icon
              path={mdiChevronLeft}
              title="Back"
              size={1.7}
              className="tabs__back-icon"
            />
            <span className="tabs__back">Back</span>
          </button>
          <Button
            classes="navigation-buttons__buttons__next"
            name={state.currentTabIndex > HeaderLength - 2 ? 'Submit' : 'Next'}
            isActive
            isLoading={isLoading}
            onClick={renderNext}
          />
        </div>
      </div>
    </div>
  );
};
