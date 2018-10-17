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
          <th className="table-header-history">Date</th>
          <th className="table-header-history">Description</th>
          <th className="table-header-history">Amount</th>
        </tr>
        <tr>
          <td className="table-data-hisotry">{props.date}</td>
          <td className="table-data-hisotry">{props.description}</td>
          <td className="table-data-hisotry">{props.amount}</td>
          <td className="table-data-history">
            <button className="edit-trade">Edit</button>
          </td>
          <td className="table-data-history">
            <button className="delete-trade">Delete</button>
          </td>
        </tr>
      </table>
      <div>
        <p>Balance</p>
        <div>{props.sumAmount}</div>
      </div>
    </div>
  );
}
