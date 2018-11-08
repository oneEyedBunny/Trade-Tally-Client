import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

let existingState;

export const store = createStore(rootReducer, (applyMiddleware(thunk)));
