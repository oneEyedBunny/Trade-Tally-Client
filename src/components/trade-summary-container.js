import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../store.js';

import { TradeSummary } from './trade-summary';
import Navigation from './navigation';
import { getTrades } from '../actions/trades';
import { getAllUsers, loginSuccess } from '../actions/auth-users'
import './trade-summary-container.css';

class TradeSummaryContainer extends React.Component {

  componentDidMount() {
    this.props.loginSuccess({
      authToken: localStorage.getItem('authToken'),
      userId: localStorage.getItem('userId'),
      fullName: localStorage.getItem('fullName'),
    })
    this.props.getTrades(this.props.userId);
    this.props.getAllUsers();

  }

  render() {
    let userSums = {};
    let userInfo = {};
    let match;

    //ensure that all trades ID's will be the partners id not the logged in user id
    this.props.trades.forEach((trade) => {
      let otherUserId = trade.tradePartnerId;
      if (otherUserId === this.props.userId) {
        otherUserId = trade.userId;
      }
      userSums[otherUserId] = userSums[otherUserId] || 0;

      //populating relevent data for display
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
      //looks for logged in user and sets any trade amounts where they're the trade partner to negative
      (otherUserId === trade.userId) ? userSums[otherUserId] -= trade.amount:
      userSums[otherUserId] += trade.amount;
    }); //close loop

    console.log('state=', store.getState());

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
      <div className='app'>
        <Navigation tradeSummaryContainer = {true} />
        <h2 className='trade-summary-page-header'>My Active Trades</h2>
        <div className= 'table-container'>
          <table>
            <thead>
              <tr id='trade-summary-table-row-header'>
                <th className='trade-summary-table-header'>Trade Partner</th>
                <th className='trade-summary-table-header'>Profession</th>
                <th className='trade-summary-table-header'>Trade Balance</th>
              </tr>
            </thead>
            <tbody>{trades}</tbody>
          </table>
          <div className='link-new-trade'>
            {!this.props.trades.length ?
              <h3>You don't have any recorded trades yet. Add one
                <Link className='link-new-trade' to='/new-trade'> here.</Link>
              </h3>: <h3></h3>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trades: state.trades.trades,
  users: state.user.users,
  userId: state.user.userId || localStorage.getItem('userId'),
});

const mapDispatchToProps = { getTrades, getAllUsers, loginSuccess }

export default connect(mapStateToProps, mapDispatchToProps)(TradeSummaryContainer);
