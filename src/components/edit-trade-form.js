import React from 'react';
import { connect } from 'react-redux';

import { editTrade } from '../actions/trades';
import './edit-trade-form.css';


class EditTradeForm extends React.Component {
  state= {
    tradeId: this.props.tradeId,
    date: '',
    serviceDescription: '',
    amount: '',
  };

  //sets the inputs into state as the user types them into the form
  setInput(event, key) {
    this.setState({
      [key]: event.target.value
    })
  };

  //finds the trade object that matches the id of the trade we selected
  selectedTrade = this.props.trades.find(trade => {
    return trade.tradeId === this.state.tradeId
  });

  //sets edit form data from existing data
  componentDidMount() {
    this.setState({
      date: this.selectedTrade.date,
      serviceDescription: this.selectedTrade.serviceDescription,
      amount: this.selectedTrade.amount,
    });
  }

//dispatches action which is ajax call to server
  onEditTrade = async event => {
    event.preventDefault();
    try {
      await this.props.editTrade(this.state, this.props.userId);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        tradeId: '',
        date: '',
        serviceDescription: '',
        amount: '',
      })
      this.props.clearEditForm()
    }
  };

  render() {
    return (
      <form id='edit-trade-form' onSubmit={(e) =>this.onEditTrade(e)}>
        <fieldset id='edit-trade-fieldset' className='fieldset'>
          <legend>Trade Info</legend>
          <div className='form-row-container'>
            <label>Date: </label>
            <input
              className='edit-trade-fields'
              id='date'
              type='date'
              name='date'
              value={this.state.date}
              onChange={e => this.setInput(e, 'date')}
              required
              />
          </div>
          <div className='form-row-container'>
            <label>Description: </label>
            <input
              className='edit-trade-fields'
              type='text area'
              id='description'
              name='description'
              value={this.state.serviceDescription}
              onChange={e => this.setInput(e, 'serviceDescription')}
              required
              />
          </div>
          <div className='form-row-container'>
            <label>Amount: </label>
            <input
              className='edit-trade-fields'
              type='number'
              id='amount'
              name='amount'
              value={this.state.amount}
              onChange={e => this.setInput(e, 'amount')}
              required
              />
          </div>
          <button role='button' type='submit' id='edit-trade-button'
            className='button'>
            Submit Edit
          </button>
        </fieldset>
      </form>
    )}
  }

  const mapStateToProps = state => ({
    trades: state.trades.trades,
    userId: state.user.userId
  });

  const mapDispatchToProps = {editTrade};
  export default connect(mapStateToProps, mapDispatchToProps)(EditTradeForm);
