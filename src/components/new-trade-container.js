import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NewTrade from './new-trade';
import InviteFriendForm from './invite-friend-form';
import Navigation from './navigation';
import './new-trade-container.css';

class NewTradeContainer extends React.Component {

  state = {
    editForm: false,
    successMessage: ''
  }

  generateInviteForm = () => {
    this.setState({
      editForm: true,
     });
  }

  clearInviteForm() {
    this.setState({
      editForm: false,
      successMessage: 'We texted your friend!'
     });
     setTimeout(() => {
       this.setState({
         successMessage: ''
       })
     }, 4000)
  }


  render() {
    return (
      <div className='app'>
        <Navigation newTradeContainer = {true} />
        <h3 id='new-trade-header'>Enter a New Trade</h3>
        <NewTrade />
        <div className='invite-tt'>
          <h4>Don't see your trade partner, invite them to join Trade Tally</h4>
        </div>
        <div className='invite-tt'>
          <a href ='#invite-button'>
            <img src='../images/text.png' alt='text me' id='text-me' onClick={() => this.generateInviteForm()}/></a>
        </div>
        <div className='invite-tt-container'>
          {this.state.editForm && <InviteFriendForm clearInviteForm = {() => this.clearInviteForm()} /> }
        </div>
        <div className='error-message-container'>{this.state.successMessage}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.user.users
  };
};

export default connect(mapStateToProps)(NewTradeContainer);
