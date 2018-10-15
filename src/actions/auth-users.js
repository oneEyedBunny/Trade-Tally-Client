//ajax calls for posting a new user and passing responses onto the reducer
//actions signal that we want the state to change, reducer actually executes changes to state
const { API_BASE_URL } = require("../config");


//retrieves all users so they're available in drop down menu for adding a new trade
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const getAllUsersSuccess = users => ({
  type: GET_ALL_USERS_SUCCESS,
  users
});

export const getAllUsers = () => {
  return async dispatch => {
    const res = await fetch(`${API_BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const users = await res.json();
    dispatch(getAllUsersSuccess(users));
  };
};


//Items related to creating a new user account
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const addNewUserSuccess = user => ({
  type: ADD_NEW_USER_SUCCESS,
  user
});

export const addNewUser = user => {
  return async dispatch => {
    const res = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const userInfo = await res.json();
    dispatch(addNewUserSuccess(userInfo));
    localStorage.setItem("authToken", userInfo.authToken);
  };
};

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
});

export const login = credentials => {
  return async dispatch => {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const userInfo = await res.json();
    dispatch(loginSuccess(userInfo));
    localStorage.setItem("authToken", userInfo.authToken);
  };
};

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const logout = dispatch => {
  localStorage.removeItem("authToken");
  dispatch(logoutSuccess());
};
