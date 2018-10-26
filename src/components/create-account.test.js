import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import configure from '../setUpTests'

import store from '../store';
import {Provider} from 'react-redux';
import CreateAccount  from './create-account';

describe('CreateAccount', () => {
  it('Renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <CreateAccount />
    </Provider>
    )
  })
})
