import React from "react";
import { connect } from "react-redux";
import { store } from "../store.js";

import TradeHistory from "./trade-history";
import Navigation from "./navigation";
import { editTrade } from "../actions/trades";
import EditTradeForm from "./edit-trade-form";
import "./trade-history-container.css";

class TradeHistoryContainer extends React.Component {

  state = {
    editForm: false
  };

  createEditForm() {
    this.setState({ editForm: true });
  }

//creates an array of trades that contain either the tradePartnerId or userId
  render() {
    //console.log("tradeparterid", this.props.trades[0].tradePartnerId);
    let filteredTrades = this.props.trades.filter(trade => {
      return trade.tradePartnerId === this.props.match.params.tradePartnerId ||
      trade.userId === this.props.match.params.tradePartnerId;
    }, this);

    let isNegative =(tradePartnerId) => {
      return this.props.userId === tradePartnerId
    }

    let trades = filteredTrades.map(trade => {
      return (
        <div>
          <TradeHistory
            tradeId={trade.tradeId}
            date={trade.date}
            serviceDescription={trade.serviceDescription}
            amount={isNegative(trade.tradePartnerId) ? trade.amount *-1 :
              trade.amount}
          />
          <div className="edit-form-container">
            {this.state.editForm && <EditTradeForm createEditForm = {this.createEditForm}/>}
          </div>
     </div>
     );
    });

    console.log("ft", filteredTrades);

//gives grand total
    let balance = 0;
    filteredTrades.forEach((trade) => {
      (this.props.userId === trade.tradePartnerId) ? balance -= trade.amount:
        balance += trade.amount;
    })
    console.log("state in history=", store.getState());

    return (
      <div className="app">
        <Navigation status="Login" />
        <div>
          <h2>
            Trade History
            <h6>with {filteredTrades[0].tradePartnerFullName}</h6>
          </h2>
        </div>
        <table>
          <thead>
            <tr id="trade-history-table-row-header">
              <th className="trade-history-table-header">Date</th>
              <th className="trade-history-table-header">Description</th>
              <th className="trade-history-table-header">Amount</th>
            </tr>
          </thead>
            <tbody>{trades}</tbody>
        </table>
        <div className="trade-balance">Balance</div>
        <div className="trade-balance total">${balance}</div>
     </div>
    )
  }
}

const mapStateToProps = state => ({
  trades: state.trades.trades,
  userId: state.user.userId
});

export default connect(mapStateToProps)(TradeHistoryContainer);
