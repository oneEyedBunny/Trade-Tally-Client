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
            type="text"
            id="firstName"
            name="firstName"
            required
          />
          <label>Last Name: </label>
          <input
            className="new-form-fields"
            type="text"
            id="lastName"
            name="lastName"
            required
          />
          <label>Email: </label>
          <input
            className="new-form-fields"
            type="email"
            id="email"
            name="email"
            required
          />
          <label>Profession: </label>
          <input
            className="new-form-fields"
            type="text"
            id="profession"
            name="profession"
            required
          />
          <label>Username: </label>
          <input
            className="new-form-fields"
            type="text"
            id="username"
            name="username"
            required
          />
          <label>Password: </label>
          <input
            className="new-form-fields"
            type="password"
            id="password"
            name="password"
            required
          />
          <button
            role="button"
            type="submit"
            id="create-profile-button"
            onClick={() => this.setEditing(false)}>Create Profile
          </button>
        </div>
      </fieldset>
    </form>
  );
}
