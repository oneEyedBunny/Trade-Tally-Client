import React from "react";
import { connect } from "react-redux";
import { store } from "../store.js";

import TradeHistory from "./trade-history";
import Navigation from "./navigation";
import "./trade-history-container.css";

class TradeHistoryContainer extends React.Component {

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

    let sumamount = 0;
    // trades.forEach()
    //write forEach loop here and then render this down below


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
