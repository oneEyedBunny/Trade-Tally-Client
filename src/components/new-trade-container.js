import React from "react";

import NewTrade from './new-trade';
import Navigation from './navigation';

export class NewTradeContainer extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <NewTrade />
      </div>
    );
  }
}
