import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import configure from '../setupTests'

import store from '../store';
import {Provider} from 'react-redux';
import Logout  from './logout';

describe('Logout', () => {
  it('Renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <Logout />
    </Provider>
    )
  })
})
