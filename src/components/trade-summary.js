import React from 'react';
import { Link } from 'react-router-dom';

import './trade-summary.css';

export function TradeSummary(props) {

  const isNegative = props.amount < 0;

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <tr id='trade-summary-data-row'>
      <td className='table-data-summary'>{props.tradePartnerFullName}</td>
      <td className='table-data-summary'>{capitalize(props.tradePartnerProfession)}</td>
      <td className='table-data-summary' style={{color: isNegative? 'red': 'black'}}>${props.amount}</td>
      <td className='table-data-summary'>
        <Link id='see-trade-history-button' className='button'
          to={`/trade-history/${props.tradePartnerId}`} >Details</Link>
      </td>
    </tr>
  );
}
