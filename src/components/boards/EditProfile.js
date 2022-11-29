import {
  collection, getDocs, query, where, doc, updateDoc, setDoc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useLoggedInUserAuth } from '../../context/UserDataContextProvider';
import { db } from '../auth/firebase';

const EditProfile = () => {
  const { currentLoggedInUser } = useLoggedInUserAuth();
  const [loading, isLoading] = useState(false);

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
      const userFromStorage = await JSON.parse(localStorage.getItem('userDetails'));
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
  }, []);

  const handlesubmit = async () => {
    const docRef = doc(db, 'users', editProfileData.id);
    setDoc(docRef, editProfileData, { name: 'edited names' })
      .then((res) => {
        console.log('Document Field has been updated successfully', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="center_edit">
      <div className="register">
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

          <section className="location">
            <p>
              Location and notes
            </p>
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
            <div className="subsection">
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
                                //   value={postCode}
                                //   onChange={(e) => setPostCode(e.target.value)}
                placeholder="Postal code"
              />
            </div>
          </section>
          <button type="button" onClick={handlesubmit} className="register__btn">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
