import React from "react";
import { connect } from "react-redux";
import { store } from "../store.js";

import { TradeHistory } from './trade-history';
import Navigation from './navigation';
import { getTrades } from "../actions/trades";
import './trade-history-container.css';

class TradeHistoryContainer extends React.Component {

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
        <TradeHistory
          key={trade.tradeId}
          date={trade.date}
          serviceDescription={trade.serviceDescription}
          amount={trade.amount}
        />
      )
    });

    return (
      <div>
        <Navigation status="Login" />
        <div>
          <h2>Trade History</h2>
          <h4> with {trades.tradePartnerFullName} </h4>
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
