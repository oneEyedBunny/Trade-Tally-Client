const { API_BASE_URL } = require("../config");

export const ADD_TRADE_SUCCESS = "ADD_TRADE_SUCCESS";
export const addTradeSuccess = values => ({
  type: ADD_TRADE_SUCCESS,
  values
});

export const addTrade = values => {
  return async dispatch => {
    let authToken = localStorage.getItem("authToken");
    const res = await fetch(`${API_BASE_URL}/trades`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      }
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const trades = await res.json();
    dispatch(addTradeSuccess(trades));
  };
};

export const DELETE_TRADE_SUCCESS = "DELETE_TRADE_SUCCESS";
export const deleteTradeSuccess = tradeId => ({
  type: DELETE_TRADE_SUCCESS,
  tradeId
});

export const deleteTrade = tradeId => {
  return async dispatch => {
    let authToken = localStorage.getItem("authToken");
    const res = await fetch(`${API_BASE_URL}/trades/${tradeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      }
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    dispatch(deleteTradeSuccess(tradeId));
  };
};

export const EDIT_TRADE_SUCCESS = "EDIT_TRADE_SUCCESS";
export const editTradeSuccess = values => ({
  type: EDIT_TRADE_SUCCESS,
  values
});

export const editTrade = state => {
  return async dispatch => {
    let authToken = localStorage.getItem("authToken");
    const res = await fetch(`${API_BASE_URL}/trades/${state.tradeId}`, {
      method: "PUT",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      }
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const values = await res.json();
    dispatch(editTradeSuccess(values));
  };
};

export const GET_TRADES_SUCCESS = "GET_TRADES_SUCCESS";
export const getTradesSuccess = trades => ({
  type: GET_TRADES_SUCCESS,
  trades
});

export const getTrades = userId => {
  return async dispatch => {
    let authToken = localStorage.getItem("authToken");
    const res = await fetch(`${API_BASE_URL}/trades/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      }
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const trades = await res.json();
    dispatch(getTradesSuccess(trades));
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
