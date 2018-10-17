import React from "react";
import { connect } from "react-redux";

import { TradeHistory } from './trade-history';
import { Navigation } from './navigation';

class TradeHistoryContainer extends React.Component {
  render() {
    return (
      <div>
        <Navigation status="Login" />
        <TradeHistory tradePartner="Arianna Orton" date="10/1/18" description="Partial Highlight" amount="$100" sumAmount="$100"/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trades: state.trades.trades,
  userId: state.user.userId
});

export default connect(mapStateToProps)(TradeHistoryContainer);
