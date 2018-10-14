//ajax calls for posting a new user and passing responses onto the reducer
//actions signal that we want the state to change, reducer actually executes changes to state
const { API_BASE_URL } = require("../config");

//Items related to creating a new user account
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const addNewUserSuccess = values => ({
  type: ADD_NEW_USER_SUCCESS,
  values
});

export const addNewUser = userInfo => {
  return dispatch => {
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
      })
      .then(data => {
        dispatch(addNewUserSuccess(data));
        //dispatch(login(userInfo));
      });
  };
};

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
    localStorage.setItem('authToken', userInfo.authToken);
  };
};

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user
});


export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const logout = dispatch => {
  localStorage.removeItem('authToken');
  dispatch(logoutSuccess());
};
