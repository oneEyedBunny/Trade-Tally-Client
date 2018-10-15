import { createStore, compose, applyMiddleware } from 'redux';
//import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

//fake data for now
import { tradeId, tradePartnerFullName, tradePartnerProfession,
  date, serviceDescription, amount } from './data/trades';

export const store = createStore(rootReducer, (applyMiddleware(thunk)));

//export const history = syncHistoryWithStore(browserHistory, store);
