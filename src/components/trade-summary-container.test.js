import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import configure from '../setupTests'

import store from '../store';
import {Provider} from 'react-redux';
import TradeSummaryContainer  from './trade-summary-container';

describe('TradeSummaryContainer', () => {
  it('Renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <TradeSummaryContainer />
    </Provider>
    )
  })
})
