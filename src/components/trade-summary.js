import React from 'react';
// import { withRouter } from "react-router-dom";
//import { Link } from 'react-router-dom';

//import { getTrades } from "../actions/trades";
import './trade-summary.css';

export function TradeSummary(props) {

  // const handleHistory = async event => {
  //   event.preventDefault();
  //   console.log("ID", event.target.val);
  //   let tradePartnerID = event.target.value
  //   try {
  //     await this.props.getTrades(tradePartnerID);
  //   } catch (error) {
  //     console.log(error);
  //     }
  //   };


  return (
    <div>
      <table>
        <tr>
          <th className="table-header-summary">Trade Partner</th>
          <th className="table-header-summary">Profession</th>
          <th className="table-header-summary">Trade Balance</th>
        </tr>
        <tr>
          <td className="table-data-summary">{props.tradePartnerFullName}</td>
          <td className="table-data-summary">{props.tradePartnerProfession}</td>
          <td className="table-data-summary">{props.amount}</td>
          <td className="table-data-summary">
            <button role="button" value={props.tradePartnerId} id="see-trade-history-button">
              See Details</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

TradeSummary.defaultProps = {
    tradePartner: '',
    profession: '',
    sumAmount: '',
};

// const mapDispatchToProps = { getTrades };
// export default withRouter(connect(undefined,mapDispatchToProps)(TradeSummary));
