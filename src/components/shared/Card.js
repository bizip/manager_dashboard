import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressBar from './CircularProgressBar';

const Card = (props) => {
  const {
    item: {
      title, icon, value, iconRight, roundPercentage, borderColor,
    },
  } = props;
  return (
    <div className="card_one" style={{ borderBottom: `4px solid ${borderColor}` }}>
      <div>
        <p>{title}</p>
        <div className="numbers">
          {icon}
          <span className="value">{value}</span>
          <span className="right__icon">{iconRight}</span>
        </div>
      </div>
      <div className="circular">
        <CircularProgressBar roundPercentage={roundPercentage} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.number,
  // roundPercentage: PropTypes.any,
  borderColor: PropTypes.string,
};

export default Card;
