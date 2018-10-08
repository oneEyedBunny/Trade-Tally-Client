import React from "react";

import { TradeHistory } from './trade-history';
import { Navigation } from './navigation';

export class TradeHistoryContainer extends React.Component {
  render() {
    return (
      <div>
        <Navigation status="Login" />
        <TradeHistory tradePartner="Arianna Orton" date="10/1/18" description="Partial Highlight" amount="$100" sumAmount="$100"/>
      </div>
    );
  }
}
