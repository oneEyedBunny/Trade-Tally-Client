import { ADD_TRADE_SUCCESS, DELETE_TRADE_SUCCESS, EDIT_TRADE_SUCCESS, GET_TRADES_SUCCESS} from "../actions/trades";
//create a reducer for every single piece of state. Reducers reducers listen for and handles actions > actually edit state
//everytime you dispatch an action, every single reducer in your app will run, whether you act on it is up to the reducer. Hence why use IF stmt and switch

const initialState = {
  trades: []
};

export function tradesReducer(state = initialState, action) {
  if (action.type === ADD_TRADE_SUCCESS) {
    return Object.assign({}, state, {
      trades: [action.values, ...state.trades]
    });
  }

  if (action.type === DELETE_TRADE_SUCCESS) {
    let tradesArray = [...state.trades];
    let deletedIndex = tradesArray.findIndex(item => item.id === action.values.tradeId);
    tradesArray.splice(deletedIndex, 1);
    return Object.assign({}, state, {
      trades: tradesArray
    });
  }

  if (action.type === EDIT_TRADE_SUCCESS) {
    let tradesArray = [...state.trades];
    tradesArray.forEach(trade => {
      if (trade.id === action.values.tradeId) {
        trade = Object.assign(trade, action.values);
      }
    });
    return Object.assign({}, state, {
      trades: tradesArray
    });
  }

  if (action.type === GET_TRADES_SUCCESS) {
    return Object.assign({}, state, {
      trades: [action.trades]
    });
  }
  return state;
}
