import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { store } from "../store.js";

import { TradeSummary } from "./trade-summary";
import Navigation from "./navigation";
import { getTrades } from "../actions/trades";
import { getAllUsers } from "../actions/auth-users";
import './trade-summary-container.css';

class TradeSummaryContainer extends React.Component {

  componentDidMount() {
      this.getTrades();
      this.props.dispatch(getAllUsers());
  }

  getTrades() {
    this.props.dispatch(getTrades(this.props.userId));
  }

  render() {
    let userSums = {};
    let userInfo = {};
    let match;

    this.props.trades.forEach((trade) => {
      let otherUserId = trade.tradePartnerId;
      if (otherUserId === this.props.userId) {
        otherUserId = trade.userId;
      }
      userSums[otherUserId] = userSums[otherUserId] || 0;

      userInfo[otherUserId] = {
        name: '',
        profession: ''
      };

      match = this.props.users.find(user => {
        return otherUserId===user.id;
      });

      if(match) {
        userInfo[otherUserId].name = match.fullName
        userInfo[otherUserId].profession =match.profession
      }

      (otherUserId === trade.userId) ? userSums[otherUserId] -= trade.amount:
        userSums[otherUserId] += trade.amount;
    }); //close loop

    console.log("state=", store.getState());

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
  users: state.user.users,
  userId: state.user.userId
});

export default connect(mapStateToProps)(TradeSummaryContainer);


// this.props.users.find(user => {
//   user.id===otherUserId;
//   console.log("finding user", user);
//   userInfo[otherUserId].name = user.fullName
//   userInfo[otherUserId].profession =user.profession
//   console.log("userInfo1=", userInfo);
// });

// name: this.props.users.fullName,
// profession: this.props.users.profession
