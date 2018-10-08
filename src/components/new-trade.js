import React from "react";

export function NewTrade(props) {
    return (
      <form id="new-trade-form">
        <fieldset id="new-trade-fieldset">
          <legend>Trade Info</legend>
          <div className="new-user-div">
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
