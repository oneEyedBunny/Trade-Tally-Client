import React from "react";
//import react router dependencies
import { BrowserRouter as Router, Route } from 'react-router-dom'; //IndexRoute, borwserHistory

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
              <Route exact path="/" component={Login} />
            </div>
        </nav>
      </div>
    );
  }
}
