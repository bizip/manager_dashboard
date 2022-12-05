import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
// import { BsCurrencyDollar } from 'react-icons/bs';

const TrackBoard = (props) => {
  const {
    title, icon, value, iconRight, roundPercentage, borderColor,
  } = props.item;
  return (
    <div className="card_one" style={{ borderBottom: `4px solid ${borderColor}` }}>
      <div>
        <p>{title}</p>
        <div className="numbers">
          {icon === '1' ? <BsCurrencyDollar className="left__icon" /> : 1}
          <span className="value">{value}</span>
          <span className="right__icon">
            {' '}
            {iconRight}
          </span>
        </div>
      </div>
      <div className="circular">
        {roundPercentage}
      </div>
    </div>
  );
};

export default TrackBoard;
