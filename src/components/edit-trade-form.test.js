import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import configure from '../setUpTests'

import store from '../store';
import {Provider} from 'react-redux';
import EditTradeForm  from './edit-trade-form';

describe('EditTradeForm', () => {
  it('Renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <EditTradeForm />
    </Provider>
    )
  })
})
