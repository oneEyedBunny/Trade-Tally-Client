import React from 'react';

export function TradeHistory(props) {
  return (
    <div>
      <div>
        <h2>Trade History</h2>
        <h4> with {props.tradePartner} </h4>
      </div>
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>{props.date}</td>
          <td>{props.description}</td>
          <td>{props.amount}</td>
        </tr>
      </table>
      <div>
        <p>Balance</p>
        <div>{props.sumAmount}</div>
      </div>
    </div>
  );
}
