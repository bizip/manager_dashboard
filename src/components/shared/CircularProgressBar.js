import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = (props) => {
  const { roundPercentage } = props;

  return <CircularProgressbar value={roundPercentage} text={`${props.roundPercentage}%`} />;
};

export default CircularProgressBar;
