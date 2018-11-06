import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginSuccess } from '../actions/auth-users'

import NewTrade from './new-trade';
import InviteFriendForm from './invite-friend-form';
import Navigation from './navigation';
import './new-trade-container.css';

class NewTradeContainer extends React.Component {

  componentDidMount() {
    this.props.loginSuccess({
      authToken: localStorage.getItem('authToken'),
      userId: localStorage.getItem('userId'),
      fullName: localStorage.getItem('fullName'),
    });
  }

  state = {
    editForm: false,
    message: ''
  }

  generateInviteForm = () => {
    this.setState({
      editForm: true,
     });
  }

  clearInviteForm() {
    this.setState({
      editForm: false,
      message: 'We texted your friend!'
     });
     setTimeout(() => {
       this.setState({
         message: ''
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
        <div className='invite-tt invite-tt-image'>
          <a href ='#invite-button'>
            <img src='../images/text.png' alt='text me' id='text-me' onClick={() => this.generateInviteForm()}/></a>
        </div>
        <div className='invite-tt-container'>
          {this.state.editForm && <InviteFriendForm clearInviteForm = {() => this.clearInviteForm()} /> }
        </div>
        <div className='error-message-container'>{this.state.message}</div>
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

const mapDispatchToProps = { loginSuccess }

export default connect(mapStateToProps, mapDispatchToProps)(NewTradeContainer);
