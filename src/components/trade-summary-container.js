import React from "react";

import { TradeSummary } from './trade-summary';
import { Navigation } from './navigation';

export class TradeSummaryContainer extends React.Component {
  render() {
    return (
      <div>
        <Navigation status="Login" />
        <TradeSummary tradePartner="Tim Saruk" profession="Chiropractor" sumAmount="$100" />
      </div>
    );
  }
}
