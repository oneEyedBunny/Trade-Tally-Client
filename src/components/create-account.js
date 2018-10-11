import React from "react";
import { connect } from 'react-redux';

import { addNewUser } from '../actions/auth-users';

export function CreateAccount(props) {
  // const handleOnSubmit = values => {
  //   const { username, password, firstName, lastName, email, profession } = values;
  //   const userInfo = { username, password, firstName, lastName, email, profession };
  //   return this.props
  //     .dispatch(addNewUser(userInfo))
  //     //.then(() => this.props.dispatch(login(username, password))); //moved it to the action creator
  // };

  return (
    <form id="new-user-form" onSubmit={this.props.dispatch(addNewUser(props.firstName))}>
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
            value={props.firstName}
          />
          <label>Last Name: </label>
          <input
            className="new-form-fields"
            type="text"
            id="lastName"
            name="lastName"
            required
            value={props.lastName}
          />
          <label>Email: </label>
          <input
            className="new-form-fields"
            type="email"
            id="email"
            name="email"
            required
            value={props.email}
          />
          <label>Profession: </label>
          <input
            className="new-form-fields"
            type="text"
            id="profession"
            name="profession"
            required
            value={props.profession}
          />
          <label>Username: </label>
          <input
            className="new-form-fields"
            type="text"
            id="username"
            name="username"
            required
            value={props.username}
          />
          <label>Password: </label>
          <input
            className="new-form-fields"
            type="password"
            id="password"
            name="password"
            required
            value={props.password}
          />
          <button role="button" type="submit" id="create-profile-button">
            Create Profile
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export const mapStateToProps = state => ({
  firstName: state.firstName,
  lastName: state.lastName,
  email: state.email,
  profession: state.profession,
  username: state.username,
  password: state.password
});

export default connect(mapStateToProps)(CreateAccount);
