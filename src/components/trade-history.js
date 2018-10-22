import React from 'react';
import { connect } from "react-redux";
import moment from 'react-moment';
import 'moment-timezone';

import { deleteTrade } from "../actions/trades";
import { updateTrade } from "../actions/trades";
import './trade-history.css';

export function TradeHistory(props) {


  const deleteTrade = async event => {
    console.log("delete ID=", props.tradeId);
    try {
      await props.dispatch(deleteTrade(props.tradeId));
    } catch (error) {
      console.log(error);
    }
  };

  // const editTrade = async event => {
  //   event.preventDefault();
  //   console.log(hi);
  // }

  // let date= moment(props.date);
  // let dateFormat = date.format('M-DD-YYYY');

  return (
    <tr id="trade-history-data-row">
      <td className="table-data-history">{props.date}</td >
      <td  className="table-data-history">{props.serviceDescription}</td >
      <td  className="table-data-history">{props.amount}</td >
      <td  className="table-data-history">
        <button role="button" type="submit" id="edit-trade" className="button">
          Edit</button>
      </td >
      <td  className="table-data-history">
        <button role="button" id="delete-trade" className="button" value={props.tradeId}
          onClick={(event) => { if (window.confirm('Are you sure you wish to delete this trade?')) deleteTrade(event.value) }}
          >Delete</button>
      </td >
    </tr>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    trades: state.trades.trades
  };
};

export default connect(mapStateToProps)(TradeHistory);
//onClick={deleteTrade(event.value)}>Delete</button>
