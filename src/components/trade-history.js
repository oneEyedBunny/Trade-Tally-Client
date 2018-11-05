import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';

import { deleteTrade } from '../actions/trades';
import './trade-history.css';

class TradeHistory extends React.Component {

  isNegative = this.props.amount < 0;

  //dispatches async action
  onDeleteTrade = async (event) => {
    try {
      await this.props.deleteTrade(this.props.tradeId);
    } catch (error) {
      console.log(error);
    }
  };

render () {
  return (
    <tr id='trade-history-data-row'>
      <td  className='table-data-history'><Moment format='M-DD-YYYY'>{this.props.date}</Moment></td >
        <td  className='table-data-history'>{this.props.serviceDescription}</td >
          <td  className='table-data-history' style={{color: this.isNegative? 'red': 'black'}}>${this.props.amount}</td >
            <td  className='table-data-history image-container'>
              <a href='#edit-trade-form' className="image-container">
                <img src='../images/edit.png' alt='edit trade' id='edit-trade' className='button' value={this.props.tradeId}
                  onClick={() => this.props.createEditForm()} /> </a>
           </td >
           <td  className='table-data-history image-container'>
             <img src='../images/delete.png' alt='delete trade' id='delete-trade' className='button' value={this.props.tradeId}
              onClick={(event) => { if (window.confirm('Are you sure you wish to delete this trade?')) this.onDeleteTrade(event.value) }}/>
           </td >
    </tr>
    );
   }
  }

const mapStateToProps = state => {
  return {
    user: state.user,
    trades: state.trades.trades
  };
};

const mapDispatchToProps = { deleteTrade }

export default connect(mapStateToProps, mapDispatchToProps)(TradeHistory);
