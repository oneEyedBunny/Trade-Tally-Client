import React from "react";
import { connect } from "react-redux";
import { store } from "../store.js";

import TradeHistory from "./trade-history";
import Navigation from "./navigation";
import "./trade-history-container.css";

class TradeHistoryContainer extends React.Component {

  //   Array.prototype.sum = function (prop) {
  //   var total = 0
  //   for ( var i = 0, _len = this.length; i < _len; i++ ) {
  //       total += this[i][prop]
  //   }
  //   return total
  //   }
  //
  // console.log("Sum =", this.props.trades.sum("amount"))

  render() {
    //console.log("tradeparterid", this.props.trades[0].tradePartnerId);
    let filteredTrades = this.props.trades.filter(trade => {
      return trade.tradePartnerId === this.props.match.params.tradePartnerId;
    }, this);

    let trades = filteredTrades.map(trade => {
      return (
        <TradeHistory
          key={trade.tradeId}
          tradeId={trade.tradeId}
          date={trade.date}
          serviceDescription={trade.serviceDescription}
          amount={trade.amount}
        />
      );
    });
    console.log("state in history=", store.getState());
    console.log("the figgin name", this.props.trades.tradePartnerFullName);
    return (
      <div className="app">
        <Navigation status="Login" />
        <div>
          <h2>
            Trade History
            <h6>with</h6>
          </h2>
          <h4>{this.props.trades.tradePartnerFullName} </h4>
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
        <div className="trade-balance total">$$amount</div>
     </div>
    )
  }
}

const mapStateToProps = state => ({
  trades: state.trades.trades,
  userId: state.user.userId
});

export default connect(mapStateToProps)(TradeHistoryContainer);
