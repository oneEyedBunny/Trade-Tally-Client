//actions signal that we want the state to change, reducer actually executes changes to state

import { GET_ALL_USERS_SUCCESS, ADD_NEW_USER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/auth-users";

const initialState = {
  isLoggedin: false,
  authToken: "",
  userId: "",
  fullName: "",
  users: []
}

export const authUserReducer = (state = initialState, action) => {
  console.log(action);

  if (action.type === ADD_NEW_USER_SUCCESS || action.type === LOGIN_SUCCESS) {
    return Object.assign({}, state, {
      isLoggedin: true,
      authToken: action.user.authToken,
      userId: action.user.userId,
      fullName: action.user.fullName
    });
  }
  if (action.type === LOGOUT_SUCCESS) {
    return initialState
  }
  if (action.type === GET_ALL_USERS_SUCCESS) {
    return Object.assign({}, state, {
      users: action.users
    });
  }
  return state;
};
