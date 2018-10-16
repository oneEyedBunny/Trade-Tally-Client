import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addTrade } from "../actions/trades";
import "./new-trade.css";

class NewTrade extends React.Component {
  state = {
    user: this.props.user.userId,
    tradePartnerId: "",
    date: "",
    description: "",
    amount: ""
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
      await this.props.addTrade(newTrade);
      console.log("new trade form working");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <form id="new-trade-form" onSubmit={this.submitTrade}>
        <fieldset id="new-trade-fieldset">
          <legend>Trade Info</legend>
          <div className="new-trade-div">
            <label>Trade Partner: </label>
            <input
              className="new-trade-fields"
              id="tradePartner"
              name="tradePartner"
              required
            />
            <label>Date: </label>
            <input
              className="new-trade-fields"
              id="date"
              type="date"
              name="date"
              required
            />
            <label>Description: </label>
            <input
              className="new-trade-fields"
              type="text area"
              id="description"
              name="description"
              required
            />
            <label>Amount: </label>
            <input
              className="new-trade-fields"
              id="amount"
              name="amount"
              required
            />
            <button role="button" type="submit" id="create-trade-button">
              Create Trade
            </button>
          </div>
          <div className="error-message-container" />
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

const mapDispatchToProps = { addTrade };
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NewTrade));
