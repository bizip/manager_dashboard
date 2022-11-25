import React from 'react';
import PropTypes from 'prop-types';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
// import { BsCurrencyDollar } from 'react-icons/bs';
// import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';
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
          {icon === 1 ? <IoIosArrowUp className="left__icon" /> : <IoIosArrowUp className="left__icon" />}
          <span className="value">{value}</span>
          <span className="right__icon">{iconRight}</span>
        </div>
      </div>
      <div className="circular">
        <CircularProgressBar roundPercentage={(roundPercentage !== 'undefined') ? roundPercentage : 67} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.number,
  borderColor: PropTypes.string,
};

export default Card;
