import React from 'react';
import { Link } from 'react-router-dom'; //allows you to link to different routes
import { connect } from 'react-redux'; //allows you to ??
import { bindActionCreators } from 'redux'; //allows you to ??

import './App.css';

//import components
import * as actionCreators from './actions/trades';
import Navigation from './components/navigation';
import CreateAccount  from './components/create-account';
import Login  from './components/login';


export default class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  newAccountForm() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div className="app">
        <Navigation status="Login" />

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
        {/*{React.cloneElement(this.props.children, this.props)} passes props from parent to child*/}
        <section className="options-container">
          <div className="option-box">
            <p>How it works</p>
          </div>
          <div className="option-box">
            <Link to="/new-trade">Enter a Trade</Link>
          </div>
          <div className="option-box">
            <Link to="/trade-summary">See All Trades</Link>
          </div>
        </section>
        <section className="how-it-works">
          <p className=""> Just simply</p>
          <p className="" onClick={() => this.newAccountForm()}>
            {" "}
            Create an Account
          </p>
          {this.state.isLoggedIn && <CreateAccount />}
          {/*checks if both are true, if they are, render them. CreateAccount will always true */}
          <p className=""> Then find the people you trade with and enter your trades when they happen</p>
          <p className=""> Then you can see your trade history with all your partners as well as the details of the individual trades </p>
        </section>
      </div>
    );
  }
};

// const mapStateToProps = state => ({
//   tradePartnerId: state.tradePartnerId,
//   tradeId: state.tradeId,
//   date: state.date,
//   serviceDescription: state.serviceDescription,
//   amount: state.amount
// });

// const mapDispatchToProps = dispatch => ({
//   bindActionCreators(actionCreators, dispatch);
// })
//
// export default connect(mapStateToProps)(mapDispatchToProps)(??);
