import {
  collection, getDocs, query, where,
} from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useLoggedInUserAuth } from '../../context/UserDataContextProvider';
import { db } from '../auth/firebase';

const EditProfile = () => {
  const { currentLoggedInUser } = useLoggedInUserAuth();
  useEffect(() => {
    const fetchUserLocation = async () => {
      if (currentLoggedInUser) {
        const q = query(collection(db, 'users'), where('uid', '==', currentLoggedInUser?.uid));
        const docSnap = await getDocs(q);
        const userData = docSnap.docs[0].data();
        console.log(userData, '+++++++++++++++++');
      }
    };
    fetchUserLocation();
  }, []);
  return (
    <div className="center_edit">
      <div className="register">
        <div className="register__container">
          <input
            type="text"
            className="register__textBox"
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="email"
            className="register__textBox"
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <section className="location">
            <p>
              Location and notes
            </p>
            <select id="continent" name="continent" className="register__textBox">
              <option value="asia">Asia</option>
              <option value="africa">Africa</option>
              <option value="europe">Europe</option>
              <option value="northamerica">North America</option>

            </select>

            <select id="country" name="country" className="register__textBox">
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
            //   value={city}
                placeholder="City"
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
          <button type="button" className="register__btn">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
