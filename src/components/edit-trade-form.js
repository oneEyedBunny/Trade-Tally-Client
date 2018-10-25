import React from "react";
import { connect } from 'react-redux';

import { editTrade } from "../actions/trades";
import "./edit-trade-form.css";


class EditTradeForm extends React.Component {
  state= {
    tradeId: this.props.tradeId,
    date: "",
    serviceDescription: "",
    amount: "",
    successMessage: ""
  };

//sets the inputs into state as the user types them into the form
  setInput(event, key) {
    this.setState({
      [key]: event.target.value
    })
  };

//finds the trade object that matches the id of the trade we selected
  selectedTrade = this.props.trades.find(trade => {
    return trade.tradeId === this.state.tradeId
  });

//sets edit form data from existing data
  componentDidMount() {
    this.setState({
      date: this.selectedTrade.date,
      serviceDescription: this.selectedTrade.serviceDescription,
      amount: this.selectedTrade.amount,
    });
  }

  onEditTrade = async event => {
    console.log("edit ID=", this.props.tradeId);
    try {
      await this.props.dispatch(editTrade(this.state));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        tradeId: "",
        date: "",
        serviceDescription: "",
        amount: "",
        successMessage: ""
    })
   }
  };

  render() {
    // console.log("selectedTrade", this.selectedTrade);
    //console.log("state=", this.state);
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
             id="description"
             name="description"
             value={this.state.serviceDescription}
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
             className="button" onClick={() => this.props.clearEditForm()}>
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
