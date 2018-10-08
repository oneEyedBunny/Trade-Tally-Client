import React from "react";

export function CreateAccount(props) {
  return (
    <form id="new-user-form">
      <fieldset id="new-user-fieldset">
        <legend>Profile Info</legend>
        <div className="error-message-container" />
        <div className="new-user-div">
          <label>First Name: </label>
          <input
            className="new-form-fields"
            id="firstName"
            name="firstName"
            required
          />
          <label>Last Name: </label>
          <input
            className="new-form-fields"
            id="lastName"
            name="lastName"
            required
          />
          <label>Email: </label>
          <input
            className="new-form-fields"
            id="email"
            type="email"
            name="email"
            required
          />
          <label>Profession: </label>
          <input
            className="new-form-fields"
            id="profession"
            name="profession"
            required
          />
          <label>Username: </label>
          <input
            className="new-form-fields"
            id="username"
            name="username"
            required
          />
          <label>Password: </label>
          <input
            className="new-form-fields"
            id="password"
            name="password"
            type="password"
            required
          />
          <button role="button" type="submit" id="create-profile-button">
            Create Profile
          </button>
        </div>
      </fieldset>
    </form>
  );
}
