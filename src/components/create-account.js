import React from "react";
import { connect } from 'react-redux';

import { addNewUser } from '../actions/auth-users';

function hasWhiteSpace(string) {
  return string.indexOf(" ") >= 0;
}

class CreateAccount extends React.Component {
  constructor(props) {
      super(props)
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          profession: "",
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
      let userInfo = this.state
      //frontend validation
      if (hasWhiteSpace(userInfo.username)) {
        this.setState({
          usernameValidate: "Username cannot contain spaces"
        })
      } else if (hasWhiteSpace(userInfo.password)) {
        this.setState({
          passwordValidate: "Password cannot contain spaces"
        })
      } else if (userInfo.password.length < 8) {
        this.setState({
          passwordValidate: "Password must be at least 8 characters"
        })
      }
      //if all inputs are valid, dispatch addNewUser action creator w/userInfo from state (set by onChange in inputs)
      else {
        this.props.addNewUser(userInfo)
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          profession: "",
          username: "",
          password: "",
          passwordValidate: "",
          usernameValidate: "",
          loading: true
        })
      }
    }

 render() {
   //need to add some message handling. Server error, server success


                            //onSubmit={(e) => this.handleSubmit(e)}
  return (
    <form id="new-user-form" onSubmit={this.handleSubmit}>
      <fieldset id="new-user-fieldset">
        <legend>Profile Info</legend>
        <div className="error-message-container" />
        <div className="new-user-div">
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
          <button role="button" type="submit" id="create-profile-button">
            Create Profile
          </button>
        </div>
      </fieldset>
    </form>
  );
 }
}

// const mapStateToProps = (state, props) => ({
//     firstName: state.firstName,
//     lastName: state.lastName,
//     email: state.email,
//     profession: state.profession,
//     username: state.username,
//     password: state.password,
//     // passwordValidate: state.passwordValidate,
//     // usernameValidate: state.usernameValidate,
//     // loading: state.loading,
// });

// Object of action creators
// const mapDispatchToProps = {
//   firstName: addNewUser,
//   lastName: addNewUser,
//   email: addNewUser,
//   profession: addNewUser,
//   username: addNewUser,
//   password: addNewUser
// }


//provides component access to action creator addNewUser
const mapDispatchToProps = {addNewUser};
export default connect(undefined, mapDispatchToProps)(CreateAccount);
