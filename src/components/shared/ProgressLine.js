import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

const ProgressLine = (props) => {
  const valueFromProps = props.targetNumber;
  const [value1, setValue1] = useState(0);
  const interval = useRef(null);
  useEffect(() => {
    setValue1(valueFromProps);
    let val = value1;
    interval.current = setInterval(() => {
      val += Math.floor(Math.random() * 10) + 1;

      if (val >= valueFromProps) {
        val = valueFromProps;
        clearInterval(interval.current);
      }

      setValue1(val);
    }, 2000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, [value1, valueFromProps]);

  return (
    <div className="card">
      <ProgressBar value={value1} />
    </div>
  );
};

export default ProgressLine;
