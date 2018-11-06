import React from 'react';
import { connect } from 'react-redux';
// import { store } from '../store.js';

import TradeHistory from './trade-history';
import Navigation from './navigation';
import { editTrade, getTrades } from '../actions/trades';
import { getAllUsers, loginSuccess } from '../actions/auth-users'
import EditTradeForm from './edit-trade-form';
import './trade-history-container.css';

class TradeHistoryContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(loginSuccess({
      authToken: localStorage.getItem('authToken'),
      userId: localStorage.getItem('userId'),
      fullName: localStorage.getItem('fullName'),
    }))
    this.props.dispatch(getTrades(this.props.userId))
    this.props.dispatch(getAllUsers());
  }


  state = {
    editForm: false,
    selectedTradeId: '',
    successMessage: ''
  };

  createEditForm(tradeId) {
    this.setState({
      editForm: true,
      selectedTradeId: tradeId
    });
  }

  clearEditForm() {
    this.setState({
      editForm: false,
      selectedTradeId: '',
      successMessage: 'Your trade was updated successfully!'
    });
    setTimeout(() => {
      this.setState({
        successMessage: ''
      })
    }, 3000)
  }

  render() {
    //creates an array of trades between the user and each trade partner
    let filteredTrades = this.props.trades.filter(trade => {
      return trade.tradePartnerId === this.props.match.params.tradePartnerId ||
      trade.userId === this.props.match.params.tradePartnerId;
    }, this);

    //filters the trades by date ascending order
    let sortedFilteredTrades = filteredTrades.sort((a,b) => {
      return(
        a.date > b.date ? -1 : a.date < b.date ? 1 : 0);
    })

    //helps to determine if amounts should be displayed as negative
    let isNegative =(tradePartnerId) => {
      return this.props.userId === tradePartnerId
    }

    let trades = sortedFilteredTrades.map(trade => {
      return (
        <TradeHistory
          tradeId={trade.tradeId}
          date={trade.date}
          serviceDescription={trade.serviceDescription}
          amount={isNegative(trade.tradePartnerId) ? trade.amount *-1 :
            trade.amount}
            createEditForm = {() => this.createEditForm(trade.tradeId)}
            />
        );
      });

      //gives grand total for bottom section of table
      let balance = 0;
      filteredTrades.forEach((trade) => {
        (this.props.userId === trade.tradePartnerId) ? balance -= trade.amount:
        balance += trade.amount;
      })

      //creating full name to display
      let actualTradePartnerId= this.props.match.params.tradePartnerId;
      const actualTradePartner = this.props.users.find(user => {
        return user.id === actualTradePartnerId
      })

      return (
        <div className='app'>
          <Navigation tradeHistoryContainer = {true}  />
          <div>
            <h2 id='trade-history-header'>
              Trade History
            </h2>
            <h6 id='trade-partner-name'>with {actualTradePartner ?
                actualTradePartner.fullName : '' }
              </h6>
            </div>
            <div className= 'table-container'>
            <table>
              <thead>
                <tr id='trade-history-table-row-header'>
                  <th className='trade-history-table-header'>Date</th>
                  <th className='trade-history-table-header'>Description</th>
                  <th className='trade-history-table-header'>Amount</th>
                </tr>
              </thead>
              <tbody>{trades}
               <tr>
                  <td className='trade-balance' colspan="2">Balance</td>
                  <td className='trade-balance total-amount'
                    style={{color: isNegative? 'red': 'black'}}>${balance}</td>
               </tr>
              </tbody>
            </table>
            </div>
            <div className='edit-form-container'>
              {this.state.editForm &&
                <EditTradeForm tradeId= {this.state.selectedTradeId}
                  clearEditForm = {() => this.clearEditForm()}/>}
            </div>
            <div className='error-message-container'>{this.state.successMessage} </div>
          </div>
        )
      }
    }

const mapStateToProps = state => ({
  trades: state.trades.trades,
  userId: state.user.userId || localStorage.getItem('userId'),
  users: state.user.users
});

export default connect(mapStateToProps)(TradeHistoryContainer);
