import { createStore, compose, applyMiddleware } from 'redux';
//import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';


import rootReducer from './reducers/index';

import { setAuthToken } from './actions/auth-users';
import { loadAuthToken } from './local-storage';

//fake data for now
import { tradeId, tradePartnerFullName, tradePartnerProfession,
  date, serviceDescription, amount } from './data/trades';

// const authToken = loadAuthToken();
// if (authToken) {
//   const token = authToken;
//   store.dispatch(setAuthToken(token));
// }

export const store = createStore(rootReducer, (applyMiddleware(thunk)));

//export const history = syncHistoryWithStore(browserHistory, store);
