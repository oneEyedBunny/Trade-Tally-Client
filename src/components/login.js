import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { login } from "../actions/auth-users";
import "./login.css";

class Login extends React.Component {
  state = {
    username: "Massage",
    password: "testing0101",
    errorSummaryMessage: "",
  };

  setInput = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let credentials = this.state;
    try {
      await this.props.login(credentials);

    } catch (error) {
      this.setState({
        errorSummaryMessage: `Your login credentials for ${error.location} failed`,
      })
    }
    this.props.onHideForm();
  };

  render() {
    return (
      <form
        role="form"
        id="login-user-form"
        name="loginUser"
        onSubmit={this.handleSubmit}>
        <fieldset name="user-info" id="user-info" className="fieldset">
          <label>Username:</label>
          <input
            className="login-form-fields"
            type="text"
            id="username"
            name="username"
            required
            value={this.state.username}
            onChange={e => {
              this.setInput(e, "username")
              this.setState({errorSummaryMessage:""})
            }}
          />
          <label>Password:</label>
          <input
            className="login-form-fields"
            type="password"
            id="password"
            name="password"
            required
            value={this.state.password}
            onChange={e => this.setInput(e, "password")}
          />
        <button role="button" id="login-user-button" className="button" type="submit">
            Login
          </button>
          <div id="demo-container">
            <h5 className="demo-info"> For demo account use:</h5>
            <h5 className="demo-info login"> u: demoDanny</h5>
            <h5 className="demo-info login"> p: demoFun111</h5>
          </div>
          <div className="error-message-container"> {this.state.errorSummaryMessage} </div>
        </fieldset>
      </form>
    );
  }
}

const mapDispatchToProps = { login };
export default withRouter(connect(undefined,mapDispatchToProps)(Login));
