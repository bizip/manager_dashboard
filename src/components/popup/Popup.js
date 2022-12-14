import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
// import '../../index.css';

import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../auth/firebase';
// import './DialogDemo.css';

const DialogDemo = () => {
  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editProfileData, setEditProfileData] = useState({
    name: '',
    continent: '',
    country: '',
    city: '',
    postalCode: '',
    id: '',

  });

  useEffect(() => {
    const fetchUserLocation = async () => {
      const userFromStorage = await JSON.parse(localStorage.getItem('currentLoggedInUser'));
      if (userFromStorage) {
        setEditProfileData({
          ...editProfileData,
          name: userFromStorage.name,
          continent: userFromStorage.continent,
          country: userFromStorage.country,
          city: userFromStorage.city,
          postalCode: userFromStorage.postCode,
          id: userFromStorage.uid,
        });
      }
    };
    fetchUserLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlesubmit = async () => {
    setLoading(true);
    const dataref = doc(db, 'users', editProfileData.id);
    await updateDoc(dataref, editProfileData).then(() => {
      setLoading(false);
      setDisplayResponsive(false);
    });
  };

  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  return (
    <div className="dialog-demo">
      <div className="card">
        <Button label="Edit Profile" id="force_bg" onClick={() => onClick('displayResponsive')} />
        <Dialog
          header="Edit Your Profile"
          visible={displayResponsive}
          onHide={() => onHide('displayResponsive')}
          breakpoints={{ '960px': '75vw' }}
          style={{ width: '50vw' }}
        >
          <div className="center_edit">
            <div className="newNav" />
            <div>
              <div className="register__container">
                <input
                  type="text"
                  className="register__textBox"
                  name="name"
                  value={editProfileData.name}
                  onChange={(e) => setEditProfileData({
                    ...editProfileData,
                    [e.target.name]: e.target.value,
                  })}
                  placeholder="Full Name"
                />

                <select
                  id="continent"
                  name="continent"
                  className="register__textBox"
                  onChange={(e) => setEditProfileData({
                    ...editProfileData,
                    [e.target.name]: e.target.value,
                  })}
                >
                  <option value="asia">Asia</option>
                  <option value="africa">Africa</option>
                  <option value="europe">Europe</option>
                  <option value="northamerica">North America</option>

                </select>

                <select
                  id="country"
                  name="country"
                  className="register__textBox"
                  onChange={(e) => setEditProfileData({
                    ...editProfileData,
                    [e.target.name]: e.target.value,
                  })}
                >
                  <option value="uganda">Uganda</option>
                  <option value="rwanda">Rwanda</option>
                  <option value="japan">Japan</option>
                  <option value="drc">DRC</option>
                  <option value="kenya">Kenya</option>
                </select>

                <input
                  type="text"
                  className="register__textBox"
                  name="city"
                  value={editProfileData.city}
                  placeholder="City"
                  onChange={(e) => setEditProfileData({
                    ...editProfileData,
                    [e.target.name]: e.target.value,
                  })}
                />

                <input
                  type="text"
                  className="register__textBox"
                  value={editProfileData.postalCode}
                  onChange={(e) => setEditProfileData({
                    ...editProfileData,
                    [e.target.name]: e.target.value,
                  })}
                  placeholder="Postal code"
                />
                <button type="button" className="register__btn" onClick={handlesubmit}>
                  {loading ? 'Editing ...' : 'Edit'}
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogDemo;
