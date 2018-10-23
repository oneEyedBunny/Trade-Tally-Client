import React from 'react';
import { connect } from "react-redux";
import Moment from 'react-moment';
import 'moment-timezone';

import { deleteTrade } from "../actions/trades";
import { editTrade } from "../actions/trades";
import './trade-history.css';

export function TradeHistory(props) {

  const state= {
    date: "",
    serviceDescription: "",
    amount: ""
  }

  const onDeleteTrade = async event => {
    try {
      await props.dispatch(deleteTrade(props.tradeId));
    } catch (error) {
      console.log(error);
    }
  };

  const onEditTrade = async event => {
    console.log("edit ID=", props.tradeId)
    try {
      await props.dispatch(editTrade(props.tradeId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr id="trade-history-data-row">
      <td className="table-data-history"><Moment format="M-DD-YYYY">{props.date}</Moment></td >
      <td  className="table-data-history">{props.serviceDescription}</td >
      <td  className="table-data-history">{props.amount}</td >
      <td  className="table-data-history">
        <button role="button" type="submit" id="edit-trade" className="button" value={props.tradeId}
          onClick={(event) => {onEditTrade(event.value)}}>Edit</button>
      </td >
      <td  className="table-data-history">
        <button role="button" id="delete-trade" className="button" value={props.tradeId}
          onClick={(event) => { if (window.confirm('Are you sure you wish to delete this trade?')) onDeleteTrade(event.value) }}
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
