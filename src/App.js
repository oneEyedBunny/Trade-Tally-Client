import React from 'react';
import ReactDOM from 'react-dom';

//import react router dependencies
import { BrowserRouter as Router, Route } from 'react-router-dom'; //IndexRoute, borwserHistory

import './App.css';

//import components
import { Navigation } from "./components/navigation";
import { OptionBoxes } from "./components/option-boxes";
import { CreateAccount } from "./components/create-account";
import { TradeSummary } from "./components/trade-summary";
import { TradeHistory } from "./components/trade-history";
import { NewTrade } from "./components/new-trade";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navigation />

          <div id="welcome-message-container">
            <h1 className="welcome-quote"> Welcome to Trade Tally</h1>
            <p className="welcome-message">
              {" "}
              The app that lets you know where your service trades stand{" "}
            </p>
          </div>

          <section className="half-boxs-container">
            <div className="left-box" />
            <div className="right-box" />
          </section>
//??
          <OptionBoxes />
          <section className="how-it-works">
            <p className=""> Some text explaining things</p>
          </section>
        </div>
    </Router>
    );
  }
}

//??   //{React.cloneElement(this.props.children, this.props)}
