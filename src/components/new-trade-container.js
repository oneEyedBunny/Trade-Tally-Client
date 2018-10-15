import React from "react";
import { connect } from 'react-redux';

import NewTrade from './new-trade';
import Navigation from './navigation';

class NewTradeContainer extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <NewTrade />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(NewTradeContainer);
