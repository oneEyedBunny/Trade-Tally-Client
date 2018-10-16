import React from 'react';
import { Link } from 'react-router-dom'; //allows you to link to different routes
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'; //allows you to ??

import './App.css';

//import components
import * as actionCreators from './actions/trades';
import Navigation from './components/navigation';
import CreateAccount  from './components/create-account';
import Login  from './components/login';


class App extends React.Component {
  state = {
    createAccountDisplay: false
  };

  newAccountForm() {
    this.setState({ createAccountDisplay: true });
  }

  render() {
    return (
      <div className="app">
        <Navigation />

        <div id="welcome-message-container">
          <h3 className="welcome-quote"> Hello. Welcome to Trade Tally</h3>
          <p className="welcome-message">
            The app that lets you know where your service trades stand
          </p>
        </div>

        <section className="half-boxs-container">
          <div className="left-box">
            <img src="images/graphicdesigner.png" alt="graphic-designer" className="person-gif" />
          </div>
          <div className="right-box">
            <img src="images/hairstylist.png" alt="hair-stylist" className="person-gif" />
          </div>
        </section>
        <section className="options-container">
          <div className="option-box">
            <p className="option-box-text">How it works</p>
          </div>
          <div className="option-box">
            <Link className="option-box-text" to="/new-trade">Enter a Trade</Link>
          </div>
          <div className="option-box">
            <Link className="option-box-text" to="/trade-summary">See All Trades</Link>
          </div>
        </section>
        <section className="how-it-works">
          <h3 className=""> How to use the app</h3>
          <p className="" onClick={() => this.newAccountForm()}>
            {" "}
            Create an Account
          </p>
          {this.state.createAccountDisplay && <CreateAccount />}
          {/*checks if both are true, if they are, render them. CreateAccount will always true */}
          <p className=""> Find the people you trade with & enter your trades when they happen</p>
          <p className=""> Then view your trade history with all your partners as well as the details of the individual trades </p>
        </section>
        <footer role="contentinfo">
          <h5 className="footer-info">Made by Allyson Short</h5>
          <h5 className="footer-info">contact deets here</h5>
        </footer>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(App);
