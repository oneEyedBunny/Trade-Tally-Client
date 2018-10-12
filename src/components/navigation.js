import React from "react";
import { Link } from 'react-router-dom';
import Login from "./login";

export class Navigation extends React.Component {
constructor(props) {
  super(props)
  this.state = { isLoggedIn: false }
}

  loginUser() {
    console.log("I'm working");
    this.setState({isLoggedIn: true })
  }

  render() {
    return (
      <div>
        <nav role="navigation">
            <div className="left-nav-container">
              <h1><Link to="/" >Trade Tally 1.0 </Link></h1>
            </div>
            <div className="right-nav-container">
              <button onClick={() => this.loginUser()}>{this.props.status}</button>
               { this.state.isLoggedIn && (<Login />)}
               {/*checks if both are true, if they are, render them. Login will always true */}
            </div>
        </nav>
      </div>
    );
  }
}
