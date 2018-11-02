import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';

import { deleteTrade } from '../actions/trades';
import './trade-history.css';

export function TradeHistory(props) {

  const isNegative = props.amount < 0;

  //dispatches action which is ajax call to server
  const onDeleteTrade = async event => {
    try {
      await props.dispatch(deleteTrade(props.tradeId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr id='trade-history-data-row'>
      <td  className='table-data-history'><Moment format='M-DD-YYYY'>{props.date}</Moment></td >
        <td  className='table-data-history'>{props.serviceDescription}</td >
          <td  className='table-data-history' style={{color: isNegative? 'red': 'black'}}>${props.amount}</td >
            <td  className='table-data-history'>
              <a href='#edit-trade-form'>
                <img src='../images/edit.png' alt='edit trade' id='edit-trade' className='button' value={props.tradeId}
                  onClick={() => props.createEditForm()} /> </a>
              </td >
              <td  className='table-data-history'>
                <img src='../images/delete.png' alt='delete trade' id='delete-trade' className='button' value={props.tradeId}
                  onClick={(event) => { if (window.confirm('Are you sure you wish to delete this trade?')) onDeleteTrade(event.value) }}/>
              </td >
            </tr>
          );
        }

const mapStateToProps = state => {
  return {
    user: state.user,
    trades: state.trades.trades
  };
};

export default connect(mapStateToProps)(TradeHistory);
