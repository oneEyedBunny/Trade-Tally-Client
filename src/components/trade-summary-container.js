import React from "react";
import { connect } from "react-redux";
import { store } from "../store.js";

import { TradeSummary } from "./trade-summary";
import Navigation from "./navigation";
import { getTrades } from "../actions/trades";
import './trade-summary-container.css';

class TradeSummaryContainer extends React.Component {

  componentDidMount() {
      this.getTrades();
  }

  getTrades() {
    this.props.dispatch(getTrades(this.props.userId));
  }

  render() {
    console.log(store.getState());
    let trades = this.props.trades.map(trade => {
      return (

        <TradeSummary
          key={trade.tradeId}
          tradePartner={trade.tradePartnerFullName}
          profession={trade.tradePartnerProfession}
          sumAmount={trade.amount}
        />
      )
    });
    return (
      <div>
        <Navigation />
        <h2 className="trade-summary-header">My Active Trades</h2>
        // need a terniary to render message saying you have no trades yet, go ahead and add one here (link to newtrade form)
        {trades}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trades: state.trades.trades,
  userId: state.user.userId
});

export default connect(mapStateToProps)(TradeSummaryContainer);
