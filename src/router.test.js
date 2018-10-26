import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import configure from './setUpTests'

import store from './store';
import {Provider} from 'react-redux';
import Router from './router';

describe('Router', () => {
  it('Renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <Router />
    </Provider>
    )
  })
})
