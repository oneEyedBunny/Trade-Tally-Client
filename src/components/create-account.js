import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addNewUser } from '../actions/auth-users';
import "./create-account.css";

function hasWhiteSpace(string) {
  return string.indexOf(" ") >= 0;
}

class CreateAccount extends React.Component {
  state = {
          firstName: "",
          lastName: "",
          email: "",
          profession: "",
          username: "",
          password: "",
          message: ""
    };

    setInput(event, key) {
      this.setState({
        [key]: event.target.value
      })
    }

    handleSubmit = async (event) => {
      event.preventDefault();
      let userInfo = this.state;
      try {
      //frontend validation
        if (hasWhiteSpace(userInfo.username)) {
          this.setState({
            message: "Username cannot contain spaces"
          })
        } else if (hasWhiteSpace(userInfo.password)) {
          this.setState({
            message: "Password cannot contain spaces"
          })
        } else if (userInfo.password.length < 8) {
          this.setState({
            message: "Password must be at least 8 characters"
          })
        }
      //if all inputs are valid, dispatch addNewUser action creator w/userInfo from state (set by onChange in inputs)
        else {
          await this.props.addNewUser(userInfo);
          this.setState({
            message: "Your account was created successfully!",
          })
        }
      } catch (error) {
          console.log(error);
          this.setState({
            message: `Error with your ${error.location}. ${error.message}`,
          });
        } finally {
        setTimeout(() => {
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            profession: "",
            username: "",
            password: "",
            message: ""
          })
        }, 3000)
      }
    };

 render() {
  return (
    <form id="new-user-form" onSubmit={this.handleSubmit}>
      {!this.props.user.isLoggedin && (
      <fieldset id="new-user-fieldset" className="fieldset">
        <legend>Profile Info</legend>
        <div className="form-row-container">
          <label>First Name: </label>
          <input
            className="new-form-fields"
            type="text"
            id="firstName"
            name="firstName"
            required
            value={this.state.firstName}
            onChange={e => this.setInput(e, "firstName")}
          />
        </div>
        <div className="form-row-container">
        <label>Last Name: </label>
          <input
            className="new-form-fields"
            type="text"
            id="lastName"
            name="lastName"
            required
            value={this.state.lastName}
            onChange={e => this.setInput(e, "lastName")}
          />
        </div>
        <div className="form-row-container">
          <label>Email: </label>
          <input
            className="new-form-fields"
            type="email"
            id="email"
            name="email"
            required
            value={this.state.email}
            onChange={e => this.setInput(e, "email")}
          />
        </div>
        <div className="form-row-container">
          <label>Profession: </label>
          <input
            className="new-form-fields"
            type="text"
            id="profession"
            name="profession"
            required
            value={this.state.profession}
            onChange={e => this.setInput(e, "profession")}
          />
        </div>
        <div className="form-row-container">
          <label>Username: </label>
          <input
            className="new-form-fields"
            type="text"
            id="username"
            name="username"
            required
            value={this.state.username}
            onChange={e => this.setInput(e, "username")}
          />
        </div>
        <div className="form-row-container">
          <label>Password: </label>
          <input
            className="new-form-fields"
            type="password"
            id="password"
            name="password"
            required
            value={this.state.password}
            onChange={e => this.setInput(e, "password")}
          />
        </div>
        <button role="button" type="submit" id="create-profile-button" className="button">
            Create Profile
          </button>
       <div className="error-message-container"> {this.state.message} </div>
      </fieldset>
    )} {/*closes ternary*/}
    </form>
  );
 }
}

//maps redux state into props
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

//provides component access to action creator addNewUser, connects CreateAccount in with react router history
const mapDispatchToProps = {addNewUser};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateAccount));
