import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import Logout from "./logout";
import { connect } from "react-redux";

export class Navigation extends React.Component {
  state = {
    loginDisplay: false
  };

  loginUser() {
    this.setState({ loginDisplay: true });
  }

  render() {
    console.log("props user state data=", this.props.user.isLoggedin);
    return (
      <div>
        <nav role="navigation">
          <div className="left-nav-container">
            <h1>
              <Link to="/">Trade Tally 1.0 </Link>
            </h1>
          </div>

          <div className="right-nav-container">
            {this.props.user.isLoggedin ? <Logout /> :
              <div>
                <button onClick={() => this.loginUser()}>
                  {this.props.status}
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
