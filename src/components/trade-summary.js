import React from 'react';
import './trade-summary.css';


export function TradeSummary(props) {
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
            <button className="see-trade-details">See Details</button>
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
