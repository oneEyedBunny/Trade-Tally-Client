import React from "react";
import { connect } from 'react-redux';

import "./invite-friend-form.css";
const { API_BASE_URL } = require("../config");

class InviteFriendForm extends React.Component {

  state = {
          userFullName: this.props.user.fullName,
          firstName: "",
          phone: "",
          errorSummaryMessage: ""
        };

    setInput(event, key) {
      this.setState({
        [key]: event.target.value
      })
      console.log("comp state=", this.state);
    }

      handleSubmit = async (event) => {
        event.preventDefault();
        let friendInfo = this.state;
        try {
          await fetch(`${API_BASE_URL}/invite`, {
            method: "POST",
            body: JSON.stringify(friendInfo),
            headers: {
              "Content-Type": "application/json",
               Authorization: `Bearer ${this.props.user.authToken}`
            }
          })
        } catch (error) {
            console.log(error);
            this.setState({
              errorSummaryMessage: `Error with your ${error.location}. ${error.message}`,
            })
          } finally {
            this.setState({
              userFullName: this.props.user.fullName,
              firstName: "",
              phone: "",
              errorSummaryMessage: ""
            })
             this.props.clearInviteForm()
          }
      };

 render() {
  return (
    <form id="invite-friend-form" onSubmit={(e) =>this.handleSubmit(e)}>
      <fieldset id="invite-friend-fieldset" className="fieldset">
        <legend>Text a Friend</legend>
        <div className="form-row-container" id="invite-friend-row">
          <label>Friends First Name: </label>
          <input
            className="invite-friend-fields"
            type="text"
            id="firstName"
            name="firstName"
            required
            value={this.state.firstName}
            onChange={e => this.setInput(e, "firstName")}
          />
      </div>
      <div className="form-row-container" id="invite-friend-row">
        <label>Friends Phone: </label>
          <input
            className="invite-friend-fields"
            type="number"
            id="phonenumber"
            name="phonenumber"
            pattern="[0-9]{10}"
            required
            value={this.state.phone}
            onChange={e => this.setInput(e, "phone")}
          />
      </div>
        <button role="button" type="submit" id="invite-button" className="button">
            Invite
        </button>
        <div className="error-message-container">{this.state.errorSummaryMessage}</div>
      </fieldset>
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

export default connect(mapStateToProps)(InviteFriendForm);
