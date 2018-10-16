import React from "react";
import { connect } from 'react-redux';

import NewTrade from './new-trade';
import Navigation from './navigation';
import "./new-trade-container.css";

class NewTradeContainer extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <h3 id="new-trade-header">Enter a new trade</h3>
        <NewTrade />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(NewTradeContainer);
