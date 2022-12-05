import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
// import '../../index.css';

import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
// import './DialogDemo.css';

const DialogDemo = () => {
  const [displayResponsive, setDisplayResponsive] = useState(false);

  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => (
    <div>
      <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
      <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
    </div>
  );

  return (
    <div className="dialog-demo">
      <div className="card">
        <Button label="Edit Profile" id="force_bg" onClick={() => onClick('displayResponsive')} />
        <Dialog
          header="Header"
          visible={displayResponsive}
          onHide={() => onHide('displayResponsive')}
          breakpoints={{ '960px': '75vw' }}
          style={{ width: '50vw' }}
          footer={renderFooter('displayResponsive')}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogDemo;
