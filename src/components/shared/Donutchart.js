import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const Donutchart = () => (
  <div>
    <CircularProgressbarWithChildren value={66}>
      <div style={{ fontSize: 14, marginTop: -5 }} className="center">
        <strong>
          Percent
        </strong>
        <strong>
          78
        </strong>
      </div>
    </CircularProgressbarWithChildren>
  </div>
);

export default Donutchart;
