import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/auth-users';
import './logout.css';

class Logout extends React.Component {
  state = {};

  handleLogout = async event => {
    event.preventDefault();
    try {
      await this.props.logout();
    } catch (error) {
      console.log(error);
    }
    this.props.onHideForm();
  };

  render() {
    return (
      <button role='button' id='logout-user-button' className='button' onClick={this.handleLogout}>
        Logout
      </button>
    );
  }
}

const mapDispatchToProps = { logout };
export default connect(undefined,mapDispatchToProps)(Logout);
