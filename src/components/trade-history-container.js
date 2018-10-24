import React from "react";
import { connect } from "react-redux";
import { store } from "../store.js";

import TradeHistory from "./trade-history";
import Navigation from "./navigation";
import { editTrade } from "../actions/trades";
import EditTradeForm from "./edit-trade-form";
import "./trade-history-container.css";

class TradeHistoryContainer extends React.Component {

  state = {
    editForm: false
  };

  createEditForm() {
    console.log("is this firing");
    this.setState({ editForm: true });
  }

  render() {
    //creates an array of trades between the user and each trade partner
    let filteredTrades = this.props.trades.filter(trade => {
      return trade.tradePartnerId === this.props.match.params.tradePartnerId ||
      trade.userId === this.props.match.params.tradePartnerId;
    }, this);

    //helps to determine if amounts should be displayed as negative
    let isNegative =(tradePartnerId) => {
      return this.props.userId === tradePartnerId
    }

    let trades = filteredTrades.map(trade => {
      return (
          <TradeHistory
            tradeId={trade.tradeId}
            date={trade.date}
            serviceDescription={trade.serviceDescription}
            amount={isNegative(trade.tradePartnerId) ? trade.amount *-1 :
              trade.amount}
            createEditForm = {() => this.createEditForm()}
          />
      );
    });

    console.log("ft", filteredTrades);

    //gives grand total for bottom section of table
    let balance = 0;
    filteredTrades.forEach((trade) => {
      (this.props.userId === trade.tradePartnerId) ? balance -= trade.amount:
        balance += trade.amount;
    })
    console.log("state in history=", store.getState());

    //creating full name to display
    let actualTradePartnerId= this.props.match.params.tradePartnerId;
    const actualTradePartner = this.props.users.find(user => {
      return user.id === actualTradePartnerId
    })

    return (
      <div className="app">
        <Navigation status="Login" />
        <div>
          <h2>
            Trade History
            <h6>with {actualTradePartner.fullName}</h6>
          </h2>
        </div>
        <table>
          <thead>
            <tr id="trade-history-table-row-header">
              <th className="trade-history-table-header">Date</th>
              <th className="trade-history-table-header">Description</th>
              <th className="trade-history-table-header">Amount</th>
            </tr>
          </thead>
            <tbody>{trades}</tbody>
        </table>
        <div className="trade-balance">Balance</div>
        <div className="trade-balance total">${balance}</div>

        <div className="edit-form-container">
            {this.state.editForm && <EditTradeForm />}
        </div>
     </div>
    )
  }
}

const mapStateToProps = state => ({
  trades: state.trades.trades,
  userId: state.user.userId,
  users: state.user.users
});

export default connect(mapStateToProps)(TradeHistoryContainer);

//<h6>with {filteredTrades[0].tradePartnerFullName}</h6>
//console.log("tradeparterid", this.props.trades[0].tradePartnerId);
