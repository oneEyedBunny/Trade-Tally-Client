import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import configure from '../setupTests'

import store from '../store';
import {Provider} from 'react-redux';
import NewTradeContainer  from './new-trade-container';

describe('NewTradeContainer', () => {
  it('Renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <NewTradeContainer />
    </Provider>
    )
  })
})
