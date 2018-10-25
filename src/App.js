import React from 'react';
import { Link } from 'react-router-dom'; //allows you to link to different routes
import { connect } from 'react-redux';

import './App.css';

//import components
import Navigation from './components/navigation';
import CreateAccount  from './components/create-account';
import "./App.css";


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

        <section className="half-boxs-container wow">
          <div className="left-box wow slideInDown">
            <img src="images/graphicdesigner.png" alt="graphic-designer" className="person-gif" />
          </div>
          <div className="right-box wow slideInDown">
            <img src="images/hairstylist.png" alt="hair-stylist" className="person-gif" />
          </div>
        </section>
        <section className="options-container">
          <div className="option-box">
            <a href="#how-it-works-summary" className="option-box-text">How it works</a>
          </div>
          <div className="option-box">
            <Link className="option-box-text" to="/new-trade">Enter a Trade</Link>
          </div>
          <div className="option-box">
            <Link className="option-box-text" to="/trade-summary">See All Trades</Link>
          </div>
        </section>
        <section className="how-it-works" id="how-it-works-summary">
          <h3 className=""> How to use the app</h3>
          <p className="create-account-link" onClick={() => this.newAccountForm()}>
            Create an Account
          </p>
          {this.state.createAccountDisplay && <CreateAccount />}
          {/*checks if both are true, if they are, render them. CreateAccount will always true */}
          <p className=""> Find the people you trade with & enter your trades when they happen</p>
          <p className=""> Then view your trade history with all your partners as well as the details of the individual trades </p>
        </section>
        <footer role="contentinfo" id="footer">
          <h5 className="footer-info">Built by <a href="http://www.linkedin.com/in/allyson-short/" target="_blank">
             Allyson Short</a></h5>
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
