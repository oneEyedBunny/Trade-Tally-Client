import React from 'react';
import './trade-history.css';

export function TradeHistory(props) {
  return (
    <div>
      <table>
        <tr>
          <th className="table-header-history">Date</th>
          <th className="table-header-history">Description</th>
          <th className="table-header-history">Amount</th>
        </tr>
        <tr>
          <td className="table-data-history">{props.date}</td>
          <td className="table-data-history">{props.serviceDescription}</td>
          <td className="table-data-history">{props.amount}</td>
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
        <div>SUMMED AMOUNT GOES HERE</div>
      </div>
    </div>
  );
}
