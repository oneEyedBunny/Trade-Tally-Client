import React from "react";
import { Link, Redirect , withRouter} from "react-router-dom";
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
    this.props.zztop(this.state.loginDisplay)
  }

  logoutUser() {
    this.setState({ loginDisplay: false });
    this.props.history.push('/');
    this.props.zztop(this.state.loginDisplay)
  }

  render() {
    // console.log("test=", this.state.loginDisplay);
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
                <button id="display-login-form" className="button login-button"
                  onClick={() => this.loginUser()}>
                  Login
                </button>
                {this.state.loginDisplay && <Login />}
                {/*checks if both are true, if they are, render them. Login will always true */}
              </div>
            } {/*closes ternary*/}
            {this.props.tradeSummaryContainer || this.props.tradeHistoryContainer ?
              <Link className="link" to="/new-trade">Enter Trade</Link> :
            this.props.newTradeContainer ?
              <Link className="link" to="/trade-summary">Trades</Link> : <div></div>}
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
export default withRouter(connect(mapStateToProps)(Navigation));
