import React from 'react';
import { connect } from 'react-redux';

import { addTrade } from '../actions/trades';
import { getAllUsers } from '../actions/auth-users';
import './new-trade.css';

class NewTrade extends React.Component {

  componentDidMount() {
    this.props.getAllUsers();
  }

  state = {
    userId: this.props.user.userId,
    tradePartnerId: '',
    date: '',
    serviceDescription: '',
    amount: '',
    message: ''
  };

  //sets the inputs into state as the user types them into the form
  setInput = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  };

  //dispatches action which is ajax call to server
  submitTrade = async event => {
    event.preventDefault();
    let newTrade = this.state;
    try {
      await this.props.addTrade(newTrade);
      this.setState({
        message: `Your trade has been recorded`,
      });
      setTimeout(() => {
        this.setState({
          message: ''
        })
      }, 4000)
    } catch (error) {
      console.log(error);
    }
    this.setState({
      user: this.props.user.userId,
      tradePartnerId: '',
      date: '',
      serviceDescription: '',
      amount: '',
    });
  }

  render() {
    //creates a sorted list of names for drop down with blank as the first for display purposes
    let sortedUsers = this.props.user.users.sort((a,b) => {
      return(
        a.firstName > b.firstName ? 1 : 0)
      })

      sortedUsers.push({
        firstName: '',
        fullName: '',
        id: '',
        lastName: '',
        profession: ''
      })

      //finds the logged in users index position and removes them from the list
      let userIndex = sortedUsers.findIndex((user, state) =>
        user.id === this.state.userId
      )
      sortedUsers.splice(userIndex, 1);

      //creates a list of user first/last names for drop down list in form
      let userDropDown = sortedUsers.map((user) => {
        return(<option value={user.id}>{user.fullName}
        </option>
      )}
    );

    return (
      <form id='new-trade-form' onSubmit={this.submitTrade}>
        <fieldset id='new-trade-fieldset' className='fieldset'>
          <legend>Trade Info</legend>
          <div className='form-row-container new-trade-row-container'>
            <label>Trade Partner: </label>
            <select
              className='new-trade-fields'
              id='tradePartnerId'
              name='tradePartnerId'
              value={this.state.tradePartnerId}
              onChange={e => {
                this.setInput(e, 'tradePartnerId');
                this.setState({message: ''})
              } }
              required>
              {userDropDown}
            </select>
          </div>
          <div className='form-row-container new-trade-row-container'>
            <label>Date: </label>
            <input
              className='new-trade-fields'
              id='date'
              type='date'
              name='date'
              value={this.state.date}
              onChange={e => this.setInput(e, 'date')}
              required
              />
          </div>
          <div className='form-row-container new-trade-row-container'>
            <label>Description: </label>
            <textarea
              className='new-trade-fields'
              type='text'
              id='serviceDescription'
              name='serviceDescription'
              value={this.state.serviceDescription}
              onChange={e => this.setInput(e, 'serviceDescription')}
              required
              />
          </div>
          <div className='form-row-container new-trade-row-container'>
            <label>Amount: </label>
            <input
              className='new-trade-fields'
              type='number'
              id='amount'
              name='amount'
              value={this.state.amount}
              onChange={e => this.setInput(e, 'amount')}
              required
              />
          </div>
          <button role='button' type='submit' id='create-trade-button'
            className='button' >
            Create Trade
          </button>
          <div className='error-message-container'>{this.state.message} </div>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = { addTrade, getAllUsers };
export default connect(mapStateToProps, mapDispatchToProps)(NewTrade);
