import React from "react";
import { connect } from "react-redux";
import { store } from "../store.js";

import TradeHistory from './trade-history';
import Navigation from './navigation';
import './trade-history-container.css';

class TradeHistoryContainer extends React.Component {

  render() {
    //console.log("tradeparterid", this.props.trades[0].tradePartnerId);
    let filteredTrades = this.props.trades.filter(trade => {
      return trade.tradePartnerId === this.props.match.params.tradePartnerId
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
      )
    });
    console.log("state in history=", store.getState());
    return (
      <div>
        <Navigation status="Login" />
        <div>
          <h2>Trade History</h2>
          <h4> with {this.props.trades.tradePartnerFullName} </h4>
        </div>
         {trades}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trades: state.trades.trades,
  userId: state.user.userId
});

export default connect(mapStateToProps)(TradeHistoryContainer);
