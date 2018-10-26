import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import configure from '../setUpTests'

import store from '../store';
import {Provider} from 'react-redux';
import NewTrade from './new-trade';

describe('NewTrade', () => {
  it('Renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <NewTrade />
    </Provider>
    )
  })
})
