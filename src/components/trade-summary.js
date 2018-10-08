import React from "react";

export class TradeSummary extends React.Component {
  render() {
    return (
      <div>
        <h2>Trade Summary</h2>
        <table>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>10/1/18</td>
            <td>Lorem ipsum</td>
            <td>$100</td>
          </tr>
        </table>
        <div>
          <p>Balance</p>
          <div>$125</div>
        </div>
      </div>
    );
  }
}
