import React from "react";
import { connect } from "react-redux";

import { addTrade } from "../actions/trades";
import { getAllUsers } from "../actions/auth-users";
import "./new-trade.css";

class NewTrade extends React.Component {

  componentDidMount() {
    this.props.dispatch(getAllUsers());
  }

  state = {
    userId: this.props.user.userId,
    tradePartnerId: "",
    date: "",
    serviceDescription: "",
    amount: "",
    successMessage: ""
  };

  setInput = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  };

  submitTrade = async event => {
    event.preventDefault();
    let newTrade = this.state;
    console.log("im the new trade data", newTrade);
    try {
      await this.props.dispatch(addTrade(newTrade));
      this.setState({
        successMessage: `Your trade has been recorded`,
      })
    } catch (error) {
      console.log(error);
    }
      this.setState({
      user: this.props.user.userId,
      tradePartnerId: "",
      date: "",
      serviceDescription: "",
      amount: "",
      });
    }

  render() {
    //creates a sorted list of names for drop down with blank as the first for display purposes
    let sortedUsers = this.props.user.users.sort((a,b) => {
      return(
        a.firstName > b.firstName ? 1 : 0)
    })

    sortedUsers.push({
      firstName: "",
      fullName: "",
      id: "",
      lastName: "",
      profession: ""
    })

    let userDropDown = sortedUsers.map((user) => {
        return(<option value={user.id}>{user.fullName}
        </option>
      )}
    )
    console.log('sortedUsers =', sortedUsers)
    console.log('userDropDown =', userDropDown)

    return (
      <form id="new-trade-form" onSubmit={this.submitTrade}>
        <fieldset id="new-trade-fieldset">
          <legend>Trade Info</legend>
          <div className="new-trade-div">
            <label>Trade Partner: </label>
            <select
              className="new-trade-fields"
              id="tradePartnerId"
              name="tradePartnerId"
              value={this.state.tradePartnerId}
              onChange={e => {
                this.setInput(e, "tradePartnerId");
                this.setState({successMessage: ""})
              } }
              required>
                {userDropDown}
            </select>
            <label>Date: </label>
            <input
              className="new-trade-fields"
              id="date"
              type="date"
              name="date"
              value={this.state.date}
              onChange={e => this.setInput(e, "date")}
              required
            />
            <label>Description: </label>
            <textarea
              className="new-trade-fields"
              type="text"
              id="serviceDescription"
              name="serviceDescription"
              value={this.state.serviceDescription}
              onChange={e => this.setInput(e, "serviceDescription")}
              required
            />
            <label>Amount: </label>
            <input
              className="new-trade-fields"
              type="number"
              id="amount"
              name="amount"
              value={this.state.amount}
              onChange={e => this.setInput(e, "amount")}
              required
            />
            <button role="button" type="submit" id="create-trade-button"
              className="button" >
              Create Trade
            </button>
          </div>
          <div className="error-message-container">{this.state.successMessage} </div>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(NewTrade);

// {userDropDown}
// {userDropDown.selectedIndex=-1}
