import React from "react";
import { Link } from 'react-router-dom'; //allows you to link
import "./App.css";

//import components
import { Navigation } from "./components/navigation";
import { CreateAccount } from "./components/create-account";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  newAccountForm() {
    console.log("I'm working");
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
        {/*{React.cloneElement(this.props.children, this.props)} */}
        <section className="options-container">
          <div className="option-box">
            <p>How it works</p>
          </div>
          <div className="option-box">
            <Link to="/new-trade">Enter a Trade</Link>
          </div>
          <div className="option-box">
            <Link to="/trade-history/12334">See Trade History</Link>
          </div>
        </section>
        <section className="how-it-works">
          <p className=""> Just simply</p>
          <p className="" onClick={() => this.newAccountForm()}>
            {" "}
            Create an Account
          </p>
          {this.state.isLoggedIn && <CreateAccount />}
          <p className=""> Then find the people you trade with and enter your trades when they happen</p>
          <p className=""> Then you can see your trade history with all your partners as well as the details of the individual trades </p>
        </section>
      </div>
    );
  }
}
