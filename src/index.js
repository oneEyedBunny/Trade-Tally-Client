import React from 'react';
import {render} from 'react-dom';
import './index.css';

import Router from './router';

//binder that allows us you use react with redux
import { Provider } from 'react-redux';

import { store, history } from './store';

render(
  <Provider store={ store }>
    <Router />
  </Provider>,
  document.getElementById('root'));
