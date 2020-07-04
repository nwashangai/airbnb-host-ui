// react libraries
import * as React from 'react';
import Dropdown from 'react-dropdown';

// Component
import Counter from 'components/Counter';

// Fixtures
import { numberOfBedrooms, newBeds } from './fixtures';

// Styles
import 'react-dropdown/style.css';
import './Step1.scss';

const renderItemCounter = ({
  isFull,
  item,
  count,
  min,
  counter,
  updateCounter,
  isArrangement
}: any) => (
  <div
    className={`step1__item-counter-wrapper${
      !isFull ? ' step1__select' : ' step1__select--full'
    }`}
  >
    <div className="step1__item">
      <span>{item}</span>
    </div>
    <Counter
      count={count}
      min={min}
      counter={counter}
      updateCounter={updateCounter}
      isArrangement={isArrangement}
    />
  </div>
);

export default (props: any) => {
  const [show, setState] = React.useState(false);

  const summary = Object.keys(props.defaultValues.arrangements).reduce(
    (cumm: any, curr: any) => ({
      total: cumm.total + props.defaultValues.arrangements[curr],
      word:
        props.defaultValues.arrangements[curr] > 0
          ? `${cumm.word} ${props.defaultValues.arrangements[curr]} ${curr}, `
          : cumm.word
    }),
    { total: 0, word: '' }
  );

  return (
    <div className="step1">
      <div className="step1__title">
        <span>How many guests can your place accommodate?</span>
      </div>
      <div className="step1__instruction">
        <span>
          Check that you have enough beds to accommodate all your guests
          comfortably.
        </span>
      </div>
      <div>
        {renderItemCounter({
          item: 'Guests',
          count: props.defaultValues.guests,
          min: 0,
          counter: 'guests',
          updateCounter: props.updateCount
        })}
        <div className="step1__bedrooms-text">
          How many bedrooms can guests use?
        </div>
        <div className="step1__select step1__bedrooms">
          <Dropdown
            options={numberOfBedrooms}
            onChange={props.onChange}
            value={props.defaultValues.numberOfBedrooms}
            className="step1__dropdown"
          />
        </div>
        <div className="step1__beds-text">How many beds can guests use?</div>
        {renderItemCounter({
          item: 'Beds',
          count: props.defaultValues.beds,
          min: 1,
          counter: 'beds',
          updateCounter: props.updateCount
        })}
      </div>
      <div>
        <div className="step1__panel-title">
          <span className="no-margin-padding">Sleeping arrangements</span>
        </div>
        <div className="step1__arrangement-desc">
          <span>
            Sharing the types of beds in each room can help people understand
            the sleeping arrangements.
          </span>
        </div>
        <div className="step1__page-container-full">
          <div className="bed-details-container">
            <div className="step1__bed-control">
              <div className="step1__details no-padding-h">
                <div className="step1__common-space">Common spaces</div>
                <div className="step1__bed-count">{summary.total} beds</div>
                <div className="bed-detail-item-summary">
                  <div
                    className={`${show ? 'bed-detail' : 'bed-detail--show'}`}
                  >
                    {summary.word.substring(0, summary.word.length - 2)}
                  </div>
                </div>
              </div>
              <div className="step1__bed-details-btn-wrapper no-padding-h">
                <button
                  className="step1__bed-control-btn"
                  onClick={() => setState(!show)}
                >
                  {show ? 'Done' : summary.total > 0 ? 'Edit beds' : 'Add beds'}
                </button>
              </div>
            </div>
            <div
              className={`no-padding-h${
                show ? ' step1__add-beds-main--show' : ' step1__add-beds-main'
              }`}
            >
              {Object.keys(props.defaultValues.arrangements).map(
                (item: string) =>
                  renderItemCounter({
                    item,
                    isFull: true,
                    count: props.defaultValues.arrangements[item],
                    min: 0,
                    counter: item,
                    updateCounter: props.updateCount,
                    isArrangement: true
                  })
              )}
              <Dropdown
                options={newBeds
                  .filter(
                    (item: string) =>
                      !Object.keys(props.defaultValues.arrangements).includes(
                        item
                      )
                  )
                  .map((item: string) => ({ value: 'newdata', label: item }))}
                onChange={props.addArrangement}
                className="step1__dropdown step1__add-bed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
