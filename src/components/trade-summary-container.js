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

    let userSums = {};
    let userInfo = {};

    this.props.trades.forEach((trade) => {
      let otherUserId = trade.tradePartnerId;
      if (otherUserId === this.props.userId) {
        otherUserId = trade.userId;
      }

      userSums[otherUserId] = userSums[otherUserId] || 0;

      userInfo[otherUserId] = {
        name: trade.tradePartnerFullName,
        profession: trade.tradePartnerProfession
      };

      (otherUserId === trade.userId) ? userSums[otherUserId] -= trade.amount:
        userSums[otherUserId] += trade.amount;
    });

    console.log("userSums=", userSums);

    let trades = Object.entries(userSums).map(tradePartner=> {
      return (
        <TradeSummary
          tradePartnerFullName= {userInfo[tradePartner[0]].name}
          tradePartnerProfession={userInfo[tradePartner[0]].profession}
          amount={tradePartner[1]}
          tradePartnerId= {tradePartner[0]}
        />
      )
    });
    return (
      <div className="app">
        <Navigation />
        <h2 className="trade-summary-page-header">My Active Trades</h2>
        <div>
          <table>
            <thead>
            <tr id="trade-summary-table-row-header">
              <th className="trade-summary-table-header">Trade Partner</th>
              <th className="trade-summary-table-header">Profession</th>
              <th className="trade-summary-table-header">Trade Balance</th>
            </tr>
            </thead>
              {this.props.trades.length ?
                <tbody>{trades}</tbody> :
                <h3>You don't have any recorded trades yet. Add one
                  <Link className="link-new-trade" to="/new-trade"> here.</Link>
                </h3>
              } {/*closes ternary*/}
          </table>
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
