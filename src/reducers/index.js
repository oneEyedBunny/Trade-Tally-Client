import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { tradesReducer } from './trades';
import { authUserReducer } from './auth-users';

const rootReducer = combineReducers({ trades: tradesReducer, user: authUserReducer, routing });

export default rootReducer;
