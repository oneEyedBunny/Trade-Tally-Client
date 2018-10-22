import React from "react";
import { connect } from "react-redux";
import { store } from "../store.js";

import TradeHistory from "./trade-history";
import Navigation from "./navigation";
import "./trade-history-container.css";

class TradeHistoryContainer extends React.Component {

//creates an array of trades that contain either the tradePartnerId or userId
  render() {
    //console.log("tradeparterid", this.props.trades[0].tradePartnerId);
    let filteredTrades = this.props.trades.filter(trade => {
      return trade.tradePartnerId === this.props.match.params.tradePartnerId ||
      trade.userId === this.props.match.params.tradePartnerId;
    }, this);

    let trades = filteredTrades.map(trade => {
      return (
        <TradeHistory
          tradeId={trade.tradeId}
          date={trade.date}
          serviceDescription={trade.serviceDescription}
          amount={trade.amount}
        />
      );
    });

    console.log("ft", filteredTrades);

//gives grand total
    let balance = 0;
    filteredTrades.forEach((trade) => {
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
