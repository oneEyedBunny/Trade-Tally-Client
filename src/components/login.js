import React from "react";
import { connect } from 'react-redux';

import { login } from '../actions/auth-users';

export class Login extends React.Component {
  constructor(props) {
      super(props)
        this.state = {
          username: "",
          password: "",
          passwordValidate: "",
          usernameValidate: "",
          loading: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    setInput(event, key) {
      this.setState({
        [key]: event.target.value
      })
    }

    handleSubmit(event) {
      event.preventDefault()
      let credentials = this.state
      this.props.dispatch(login(credentials))
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
        <button role="button" id="login-user-button" type="submit" />
        <div id="demo-container">
          <h7 className="demo-info"> For demo account use:</h7>
          <h7 className="demo-info login"> u: demoDanny</h7>
          <h7 className="demo-info login"> p: demoFun1</h7>
        </div>
        <div className="error-message-container">{this.props.errorMessage}</div>
      </fieldset>
    </form>
  );
 }
}

// const mapStateToProps = (state, props) => ({
//     errorMessage: state.user.errorMessage
// });

export default connect()(Login);
