import React from 'react';
// import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

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
    <tr id="trade-summary-data-row">
      <td className="table-data-summary">{props.tradePartnerFullName}</td>
      <td className="table-data-summary">{props.tradePartnerProfession}</td>
      <td className="table-data-summary">{props.amount}</td>
      <td className="table-data-summary">
        <Link id="see-trade-history-button" className="button" to={`/trade-history/${props.tradePartnerId}`} >See Details</Link>
      </td>
    </tr>
  );
}

TradeSummary.defaultProps = {
    tradePartner: '',
    profession: '',
    sumAmount: '',
};

// const mapDispatchToProps = { getTrades };
// export default withRouter(connect(undefined,mapDispatchToProps)(TradeSummary));
