import React from 'react';
import { Link } from 'react-router-dom'; //allows you to link to different routes
import { connect } from 'react-redux';

import './App.css';
import { WOW } from "wowjs";
//import components
import Navigation from './components/navigation';
import CreateAccount  from './components/create-account';
import "./App.css";


class App extends React.Component {
  state = {
    createAccountDisplay: false,
    loginDisplay: false
  };

  componentDidMount() {
    new WOW().init();
  }

  newAccountForm() {
    this.setState({ createAccountDisplay: true });
  }

//function to faciliate recieving child comp (navigation) state
  isLoggedIn(childState) {
    this.setState({ loginDisplay: childState });
  }

  render() {
    return (
      <div className="app">
        <Navigation zztop={this.isLoggedIn}/>

        <div id="welcome-message-container">
          <h3 className="welcome-quote"> Hello. Welcome to Trade Tally</h3>
          <p className="welcome-message">
            The app that lets you know where your service trade $$$ stand
          </p>
        </div>

        <div className="chevron-container">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>

        <section className="half-boxs-container wow">
          <div className="left-box wow zoomIn">
            <img src="images/graphicdesigner.png" alt="graphic-designer" className="person-gif" id="person-gif-left" />
          </div>
          <div className="right-box wow zoomIn">
            <img src="images/hairstylist.png" alt="hair-stylist" className="person-gif" id="person-gif-right" />
          </div>
        </section>
        <section className="options-container">
          <div className="option-box">
            <a href="#how-it-works-summary" className="option-box-text">How it works</a>
          </div>
          <div className="option-box">
            {this.state.loginDisplay ?
            <Link className="option-box-text" to="/new-trade">Enter a Trade</Link>:
            <a href="#display-login-form">Enter a Trade</a>}

          </div>
          <div className="option-box">
            {this.state.loginDisplay ?
            <Link className="option-box-text" to="/trade-summary">See All Trades</Link>:
            <a href="#display-login-form">See All Trades</a>}
          </div>
        </section>
        <section className="how-it-works wow fadeInLeft" id="how-it-works-summary">
          <h3> How to use the app</h3>
          <img src="images/addblu.png" alt="create-account" className="what-to-do-gif"
            onClick={() => this.newAccountForm()}/>
          <p className="create-account-link how-it-works-text" onClick={() => this.newAccountForm()}>
            Create an Account
          </p>
          {this.state.createAccountDisplay && <CreateAccount />}
          {/*checks if both are true, if they are, render them. CreateAccount will always true */}
          <img src="images/searchblu.png" alt="enter a trade" className="what-to-do-gif" />
          <p className="how-it-works-text"> Find the people you trade with & enter your trades when they happen</p>
          <img src="images/trkblu.png" alt="see your trades" className="what-to-do-gif" />
          <p className="how-it-works-text"> Then see your trade history with all your partners as well as the details of the individual trades so you know who owes who </p>
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
