import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { tradesReducer } from './trades';
import { authUserReducer } from './auth-users';

//export const default rootReducer = combineReducers ( => { tradesReducer, authUserReducer, routing } )
const rootReducer = combineReducers({ tradesReducer, authUserReducer, routing });

export default rootReducer;
