import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logout } from "../actions/auth-users";

class Logout extends React.Component {
  state = {};

  handleLogout = async event => {
    event.preventDefault();
    try {
      await this.props.logout();
    } catch (error) {
      console.log(error);
    }
    console.log("log out successfully");
    this.props.onLogoutUser();
  };

  render() {
    return (
      <button role="button" id="logout-user-button" onClick={this.handleLogout}>
        Logout
      </button>
    );
  }
}

const mapDispatchToProps = { logout };
export default withRouter(connect(undefined,mapDispatchToProps)(Logout));
