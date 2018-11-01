import React from "react";
import { Link, Redirect , withRouter} from "react-router-dom";
import { connect } from "react-redux";


import Login from "./login";
import Logout from "./logout";
import "./navigation.css";

export class Navigation extends React.Component {
  state = {
    displayLoginForm: false
  };

  displayForm() {
    this.setState({ displayLoginForm: true });
  }

  hideForm() {
    this.setState({
      displayLoginForm: false
    });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="navigation-container">
        <nav role="navigation">
          <div className="left-nav-container">
            <h3>
              <Link className="logo" to="/">Trade Tally 1.0 </Link>
            </h3>
          </div>

          <div className="right-nav-container">
            {this.props.user.isLoggedin ? <Logout onHideForm= {() => this.hideForm()} /> :
              <div>
                <button id="display-login-form" className="button"
                  onClick={() => this.displayForm()}>
                  Login
                </button>
                {this.state.displayLoginForm && <Login onHideForm={() => this.hideForm()}/>}
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

// <div>
//   <button id="display-login-form login-user-button" className="button"
//     onClick={() => this.displayForm()}>
//     Login
//   </button>
//   {this.state.displayLoginForm && <Login onHideForm={() => this.hideForm()}/>}
//   {/*checks if both are true, if they are, render them. Login will always true */}
// </div>
