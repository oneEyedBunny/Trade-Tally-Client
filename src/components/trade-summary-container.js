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
      console.log("trades =", this.props.trades);
      console.log("trade =", trade);
      console.log("trade Partner =", trade.tradePartnerFullName);
      return (
        <TradeSummary
          key={trade.tradePartnerId}
        debugger
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
        <div>
          {this.props.trades.length===0 ?
            <div>
              {trades}
            </div> :
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
