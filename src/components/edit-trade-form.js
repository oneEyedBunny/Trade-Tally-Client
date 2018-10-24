import React from "react";
import { connect } from 'react-redux';

import { editTrade } from "../actions/trades";
import "./edit-trade-form.css";


class EditTradeForm extends React.Component {

  state= {
    tradeId: "",
    date: "",
    serviceDescription: "",
    amount: "",
    successMessage: ""
  };

  setInput(event, key) {
    this.setState({
      [key]: event.target.value
    })
  }

  onEditTrade = async event => {
    console.log("edit ID=", this.props.tradeId);
    try {
      await this.props.dispatch(editTrade(this.state));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
   return (
     <form id="edit-trade-form" onSubmit={this.onEditTrade}>
       <fieldset id="edit-trade-fieldset">
         <legend>Trade Info</legend>
         <div className="edit-trade-div">
           <label>Date: </label>
           <input
             className="edit-trade-fields"
             id="date"
             type="date"
             name="date"
             value={this.state.date}
             onChange={e => this.setInput(e, "date")}
             required
           />
           <label>Description: </label>
           <input
             className="edit-trade-fields"
             type="text area"
             id="serviceDescription"
             name="serviceDescription"
             value={this.state.description}
             onChange={e => this.setInput(e, "serviceDescription")}
             required
           />
           <label>Amount: </label>
           <input
             className="edit-trade-fields"
             type="number"
             id="amount"
             name="amount"
             value={this.state.amount}
             onChange={e => this.setInput(e, "amount")}
             required
           />
           <button role="button" type="submit" id="edit-trade-button"
             className="button" >
             Submit Edit
           </button>
         </div>
         <div className="error-message-container">{this.state.successMessage} </div>
        </fieldset>
        </form>

   )} //closes return & render

} //closes comp

const mapStateToProps = state => ({
  trades: state.trades.trades,
  userId: state.user.userId
});

export default connect(mapStateToProps)(EditTradeForm);
