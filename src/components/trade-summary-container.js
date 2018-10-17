import React from "react";
import { connect } from "react-redux";
//import { withRouter } from 'react-router-dom';

import { TradeSummary } from "./trade-summary";
import Navigation from "./navigation";
import { getTrades } from "../actions/trades";

export class TradeSummaryContainer extends React.Component {
  getTrades() {
    this.props.dispatch(getTrades(this.props.user.userId));
  }

  render() {
    let trades = this.props.trades.map(trade => {
      return (
        <TradeSummary
          key={trade.id}
          tradePartner={trade.tradePartner}
          profession={trade.profession}
          sumAmount={trade.sumAmount}
        />
      )
    });
    return (
      {trades}
    )
  }
}

const mapStateToProps = state => ({
  trades: state.trades,
  userId: state.user.userId
});

export default connect(mapStateToProps)(TradeSummaryContainer);
