import React from 'react';
import ProgressLine from './ProgressLine';

const TargetBord = (props) => {
  const { title, targetNumber } = props.item;
  return (
    <div className="target__card">
      <div className="target__card__header">
        <span className="target__value">
          {targetNumber}
          %
        </span>
        <ProgressLine targetNumber={targetNumber} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default TargetBord;
