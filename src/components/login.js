import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../actions/auth-users';

class Login extends React.Component {
      state = {
          username: "",
          password: "",
          passwordValidate: "",
          usernameValidate: "",
          loading: false,
        };

    setInput = (event, key) => {
      this.setState({
        [key]: event.target.value
      })
    }

    handleSubmit = async (event) => {
      event.preventDefault()
      let credentials = this.state
      this.setState({ loading: true })
      try {
        await this.props.login(credentials)
      } catch (e) {
        //finish error handling
        console.log(e);
        this.setState({ loading: false })
      }
      console.log("log in success");
    }

  render() {
    //need to add some message handling. Server error, server success

  return (
    <form role="form" id="login-user" name="loginUser" onSubmit={this.handleSubmit}>
      <fieldset name="user-info" id="user-info">
        <label>Username:</label>
          <input
            className="login-form-fields"
            type="text"
            id="username"
            name="username"
            required
            value={this.state.username}
            onChange={e => this.setInput(e, "username")}
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
          <button role="button" id="login-user-button" type="submit">Login</button>
        <div id="demo-container">
          <h5 className="demo-info"> For demo account use:</h5>
          <h5 className="demo-info login"> u: demoDanny</h5>
          <h5 className="demo-info login"> p: demoFun1</h5>
        </div>
        <div className="error-message-container">{this.props.errorMessage}</div>
      </fieldset>
    </form>
  );
 }
}

const mapDispatchToProps = {login};
export default withRouter(connect(undefined, mapDispatchToProps)(Login));
