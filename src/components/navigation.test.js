import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import configure from '../setupTests'

import store from '../store';
import {Provider} from 'react-redux';
import Navigation  from './navigation';

describe('Navigation', () => {
  it('Renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <Navigation />
    </Provider>
    )
  })
})
