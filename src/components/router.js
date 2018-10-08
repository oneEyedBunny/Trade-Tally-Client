import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import { TradeSummaryContainer } from './trade-summary-container';
import { TradeHistoryContainer} from './trade-history-container';
import { NewTradeContainer } from './new-trade-container';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/trade-summary' component={TradeSummaryContainer} />
      <Route exact path='/trade-history/:tradePartnerId' component={TradeHistoryContainer} />
      <Route exact path='/new-trade' component={NewTradeContainer} />
    </Switch>
  </BrowserRouter>
)

export default Router;
