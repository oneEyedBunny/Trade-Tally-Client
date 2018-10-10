import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import tradesReducer from './trades';
import authUserReducer from './auth-users';

export default const rootReducer = combineReducers ( => { tradesReducer, authUserReducer, routing } )
