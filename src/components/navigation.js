import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./login";
import Logout from "./logout";
import "./navigation.css";

export class Navigation extends React.Component {
  state = {
    loginDisplay: false
  };

  loginUser() {
    this.setState({ loginDisplay: true });
  }

  logoutUser() {
    this.setState({ loginDisplay: false });
  }

  render() {
    console.log("login status is =", this.props.user.isLoggedin);
    return (
      <div className="navigation-container">
        <nav role="navigation">
          <div className="left-nav-container">
            <h3>
              <Link className="logo" to="/">Trade Tally 1.0 </Link>
            </h3>
          </div>

          <div className="right-nav-container">
            {this.props.user.isLoggedin ? <Logout onLogoutUser= {() => this.logoutUser()} /> :
              <div>
                <button onClick={() => this.loginUser()}>
                  Login
                </button>
                {this.state.loginDisplay && <Login />}
                {/*checks if both are true, if they are, render them. Login will always true */}
              </div>
            } {/*closes ternary*/}
          </div>
        </nav>
      </div>
   );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Navigation);
