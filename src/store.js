import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

let existingState;

// function getLocalStorageState() {
//   existingState = {
//     isLoggedin: localStorage.getItem('isLoggedin'),
//     authToken: localStorage.getItem('authToken'),
//     userId: localStorage.getItem('userId'),
//     fullName: localStorage.getItem('fullName'),
//   };
//   return existingState;
// }

export const store = createStore(rootReducer, (applyMiddleware(thunk)));
// export const store = createStore(rootReducer, getLocalStorageState(), (applyMiddleware(thunk)));
