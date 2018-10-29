import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from "../store.js";

import NewTrade from './new-trade';
import Navigation from './navigation';
import "./new-trade-container.css";

class NewTradeContainer extends React.Component {
  render() {
      console.log("state=", store.getState());
    return (
      <div className="app">
        <Navigation />
        <h3 id="new-trade-header">Enter a New Trade</h3>
        <NewTrade />
        <h4 className="link-trade-summary">
          <Link className="link-trade-summary" to="/trade-summary"> See all my trades</Link>
        </h4>
        <h4>Invite a friend to Join Trade Tally</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.user.users
  };
};

export default connect(mapStateToProps)(NewTradeContainer);
