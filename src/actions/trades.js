const {API_BASE_URL} = require('../config');

export const ADD_NEW_TRADE_SUCCESS = "ADD_NEW_TRADE_SUCCESS";
export const addNewTradeSuccess = (values) => ({
  type: ADD_NEW_TRADE_SUCCESS,
  values
});

export const addTrade = values => {
  return (dispatch, getState) => {
    let authToken = getState().authToken
    fetch(`${API_BASE_URL}/trades`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
    .then(res => {
      return res.json()
    }
    )
    .then(data => {
      dispatch(addNewTradeSuccess(data))
    })
    .catch(err => console.log(err))
  }
}

export const DELETE_TRADE_SUCCESS = "DELETE_TRADE_SUCCESS";
export const deleteTradeSuccess = (tradeId) => ({
  type: DELETE_TRADE_SUCCESS,
  tradeId
});

export const deleteTrade = tradeId => {
  return (dispatch, getState) => {
    let authToken = getState().authToken
    fetch(`${API_BASE_URL}/trades/${tradeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
    .then(() => dispatch(deleteTradeSuccess(tradeId)))
    .catch(err => console.log(err))
  }
}

export const EDIT_TRADE_SUCCESS = "EDIT_TRADE_SUCCESS";
export const editTradeSuccess = (values) => ({
  type: EDIT_TRADE_SUCCESS,
  values
});

export const editTrade = (state) => {
  return (dispatch, getState) => {
    let authToken = getState().authToken
    fetch(`${API_BASE_URL}/trades/${state.tradeId}`, {
      method: "PUT",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
    .then(res => {
      return res.json()
    }
    )
    .then(data => {
      dispatch(editTradeSuccess(data))
    })
    .catch(err => console.log(err))
  }
}

export const GET_TRADES_SUCCESS = "GET_TRADES_SUCCESS";
export const getTradesSuccess = values => ({
  type: GET_TRADES_SUCCESS,
  values
})

export const getTrades = (userId) => {
  return (dispatch, getState) => {
    let authToken = getState().user.authToken
    fetch(`${API_BASE_URL}/trades/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        dispatch(getTradesSuccess(data));
      })
      .catch(err => console.log(err))
  };
};

//This isn't quite right because tradeBalance will need to be a calculation.
// export const BUILD_SUMMARY_TABLE = "BUILD_SUMMARY_TABLE";
// export const buildSummaryTable = (tradePartnerFullName, tradePartnerProfession, tradeBalance) => ({
//   type: BUILD_SUMMARY_TABLE,
//   tradePartnerFullName,
//   tradePartnerProfession: profession,
//   tradeBalance
// });
//
// export const BUILD_HISTORY_TABLE = "BUILD_HISTORY_TABLE";
// export const buildHistoryTable = (tradeId, date, serviceDescription, amount) => ({
//   type: BUILD_HISTORY_TABLE,
//   tradeId,
//   date,
//   serviceDescription,
//   amount
// });
