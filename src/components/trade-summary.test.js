import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import configure from '../setupTests'

import store from '../store';
import {Provider} from 'react-redux';
import TradeSummary  from './trade-summary';

describe('TradeSummary ', () => {
  it('Renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <TradeSummary  />
    </Provider>
    )
  })
})
