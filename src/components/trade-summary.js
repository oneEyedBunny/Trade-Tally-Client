import React from 'react';

export function TradeSummary(props) {
  return (
    <div>
      <h2>My Active Trades</h2>
      <table>
        <tr>
          <th className="table-header-summary">Trade Partner</th>
          <th className="table-header-summary">Profession</th>
          <th className="table-header-summary">Trade Balance</th>
        </tr>
        <tr>
          <td className="table-data-summary">{props.tradePartner}</td>
          <td className="table-data-summary">{props.profession}</td>
          <td className="table-data-summary">{props.sumAmount}</td>
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
