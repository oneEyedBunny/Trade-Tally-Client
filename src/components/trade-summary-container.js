import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
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
    console.log("state=", store.getState());
    let trades = this.props.trades.map(trade => {
      console.log("trade =", trade);
      return (
        <TradeSummary
          key={trade.tradePartnerId}
          tradePartnerFullName={trade.tradePartnerFullName}
          tradePartnerProfession={trade.tradePartnerProfession}
          amount={trade.amount}
          tradePartnerId= {trade.tradePartnerId}
        />
      )
    });
    return (
      <div className="app">
        <Navigation />
        <h2 className="trade-summary-header">My Active Trades</h2>
        <div>
          {this.props.trades.length ?
            <div>{trades}</div> :
            <h3>You don't have any recorded trades yet. Add one
              <Link className="link-new-trade" to="/new-trade"> here.</Link>
            </h3>
          } {/*closes ternary*/}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trades: state.trades.trades,
  userId: state.user.userId
});

export default connect(mapStateToProps)(TradeSummaryContainer);
