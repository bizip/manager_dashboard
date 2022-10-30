import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import '../../index.css';

import React, { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

const Alert = () => {
  const msgs1 = useRef(null);
  useEffect(() => {
    msgs1.current.show([

      {
        severity: 'info',
        summary: ' ',
        detail: 'This dashboard example was created using only the available elements and components, no additional scss was written',
        sticky: true,
      },

    ]);
  }, []);

  return (
    <div>
      <div className="card">
        <Messages ref={msgs1} />
      </div>
    </div>
  );
};

export default Alert;
