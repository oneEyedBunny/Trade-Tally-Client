//ajax calls for posting a new user and passing responses onto the reducer
//actions signal that we want the state to change, reducer actually executes changes to state

import {saveAuthToken, clearAuthToken} from '../local-storage';
const {API_BASE_URL} = require("../config")

//Items related to creating a new user account
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const addNewUserSuccess = values => ({
  type: ADD_NEW_USER_SUCCESS,
  values
});

export const ADD_NEW_USER_FAIL = "ADD_NEW_USER_FAIL";
export const addNewUserFail = () => ({
  type: ADD_NEW_USER_FAIL
})

export const addNewUser = userInfo => {
  return (dispatch) => {
    dispatch(loginLoading(true))
    fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }
    )
    .then(data => {
        dispatch(addNewUserSuccess(data))
        dispatch(loading(false))
        dispatch(login(userInfo))
    })
    .catch((err) => {
      console.log(err)
      dispatch(addNewUserFail())
      dispatch(loading(false))
    })
  }
}

// Items related to Login/Logout of a user
export const LOADING = "LOADING"
export const loading = value => ({
  type: LOADING,
  value
})

export const LOGIN_LOADING = "LOGIN_LOADING"
export const loginLoading = value => ({
  type: LOGIN_LOADING,
  value
})

export const LOGIN_FAIL = "LOGIN_FAIL";
export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  error
})

export const login = credentials => {
  return (dispatch) => {
    dispatch(loginLoading(true))
    fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      dispatch(loginLoading(false))
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }
    )
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(error => {
      console.log(error)
      dispatch(loginFail(error))
      dispatch(loginLoading(false))
    })
  }
}

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

const storeAuthInfo = (authToken, dispatch) => {
    dispatch(setAuthToken(authToken));
    saveAuthToken(authToken);
};

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const logout = (dispatch) => {
  clearAuthToken()
  dispatch(logoutSuccess())
}
