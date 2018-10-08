import React from 'react';

export function TradeSummary(props) {
  return (
    <div>
      <h2>My Active Trades</h2>
      <table>
        <tr>
          <th>Trade Partner</th>
          <th>Profession</th>
          <th>Trade Balance</th>
        </tr>
        <tr>
          <td>{props.tradePartner}</td>
          <td>{props.profession}</td>
          <td>{props.sumAmount}</td>
        </tr>
      </table>
    </div>
  );
}
