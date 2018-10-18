import React from 'react';
import { connect } from "react-redux";

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

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th className="table-header-history">Date</th>
          <th className="table-header-history">Description</th>
          <th className="table-header-history">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="table-data-history">{props.date}</td>
          <td className="table-data-history">{props.serviceDescription}</td>
          <td className="table-data-history">{props.amount}</td>
          <td className="table-data-history">
            <button role="button" type="submit" id="edit-trade">
              Edit</button>
          </td>
          <td className="table-data-history">
            <button role="button" id="delete-trade" value={props.tradeId}
              onClick={(event) => { if (window.confirm('Are you sure you wish to delete this trade?')) deleteTrade(event.value) }}
              >Delete</button>
          </td>
        </tr>
        <tr>
          <th className="table-header-history">Balance</th>
          <td id="sum-amount">{props.amount}</td>
        </tr>
       </tbody>
      </table>
    </div>
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
