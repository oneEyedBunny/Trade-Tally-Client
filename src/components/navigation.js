import React from "react";
import { Link } from 'react-router-dom'; //allows you to link
import { Login } from "./login";

export class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav role="navigation">
            <div className="left-nav-container">
              <h1><Link to="/" >Trade Tally 1.0 </Link></h1>
            </div>
            <div className="right-nav-container">
              <h3>{this.props.status}</h3>
            </div>
        </nav>
      </div>
    );
  }
}
