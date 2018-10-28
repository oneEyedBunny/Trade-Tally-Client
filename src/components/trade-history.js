import React from 'react';
import { connect } from "react-redux";
import Moment from 'react-moment';
import 'moment-timezone';

import { deleteTrade } from "../actions/trades";
import './trade-history.css';

export function TradeHistory(props) {

  const isNegative = props.amount < 0;

  const onDeleteTrade = async event => {
    try {
      await props.dispatch(deleteTrade(props.tradeId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr id="trade-history-data-row">
      <td className="table-data-history"><Moment format="M-DD-YYYY">{props.date}</Moment></td >
      <td  className="table-data-history">{props.serviceDescription}</td >
      <td  className="table-data-history" style={{color: isNegative? "red": "black"}}>${props.amount}</td >
      <td  className="table-data-history">
        <button role="button" type="submit" id="edit-trade" className="button" value={props.tradeId}
          onClick={() => props.createEditForm()}>Edit</button>
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

//onClick={(event) => {createEditForm(event.value)}}>Edit</button>
