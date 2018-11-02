import React from 'react';
import { connect } from 'react-redux';

const { API_BASE_URL } = require('../config');
import './invite-friend-form.css';

class InviteFriendForm extends React.Component {

  state = {
    userFullName: this.props.user.fullName,
    firstName: '',
    phone: '',
    errorSummaryMessage: ''
  };

//sets the inputs into state as the user types them into the form
  setInput(event, key) {
    this.setState({
      [key]: event.target.value
    })
    console.log('comp state=', this.state);
  }

  //dispatches action which is ajax call to server
  handleSubmit = async (event) => {
    event.preventDefault();
    let friendInfo = this.state;
    try {
      const res = await fetch(`${API_BASE_URL}/invite`, {
        method: 'POST',
        body: JSON.stringify(friendInfo),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.props.user.authToken}`
        }
      })
      if (!res.ok) {
        console.log(res);
        this.setState({
          errorSummaryMessage: 'Your request failed'
        });
        setTimeout(() => {
          this.setState({
            errorSummaryMessage: ''
          })
        }, 4000)
      } else {
        this.props.clearInviteForm()
      }
    } catch (error) {
      console.log('error=',error);
      this.setState({
        errorSummaryMessage: error.message
      })
    }
  };

  render() {
    return (
      <form id='invite-friend-form' onSubmit={(e) =>this.handleSubmit(e)}>
        <fieldset id='invite-friend-fieldset' className='fieldset'>
          <legend>Text a Friend</legend>
          <div className='form-row-container' id='invite-friend-row'>
            <label>Friends First Name: </label>
            <input
              className='invite-friend-fields'
              type='text'
              id='firstName'
              name='firstName'
              required
              value={this.state.firstName}
              onChange={e => this.setInput(e, 'firstName')}
              />
          </div>
          <div className='form-row-container' id='invite-friend-row'>
            <label>Friends Phone: </label>
            <input
              className='invite-friend-fields'
              type='number'
              id='phonenumber'
              name='phonenumber'
              pattern='[0-9]{10}'
              required
              value={this.state.phone}
              onChange={e => this.setInput(e, 'phone')}
              />
          </div>
          <button role='button' type='submit' id='invite-button' className='button'>
            Invite
          </button>
          <div className='error-message-container'>{this.state.errorSummaryMessage}</div>
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

export default connect(mapStateToProps)(InviteFriendForm);
