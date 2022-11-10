import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  query, collection, getDocs, where,
} from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';

import { toast } from 'react-toastify';
import { auth, db } from '../auth/firebase';
import Dropdown from '../subNavBars/Dropdown';

const NavBar = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const defaultPic = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
  const [profile, setProfile] = useState(defaultPic);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);

  const toggleDropDown = () => {
    setIsDropDown((prev) => !prev);
  };
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      toast.error('An error occured while fetching user data', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  /* eslint-disable consistent-return */
  useEffect(() => {
    // if (loading) return;
    // On the above line we can add loader
    if (!user) return navigate('/');
    fetchUserName();
    user.providerData.forEach((profile) => {
      if (profile.photoURL) {
        setProfile(profile.photoURL);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <div>
      <nav className="nav_container">
        <div className="nav__left">
          <h2>architect</h2>
          <HiMenu className="nav__hamberger" />
        </div>

        <div className="nav__right">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="nav__avatar" onClick={toggleDropDown}>
            <img
              src={profile}
              className="avatar__profile"
              alt="Avatar"
            />

            <IoIosArrowDown className="avatar__dropdown" />
          </Link>

          <div className="avatar__details">
            <p className="details_header">{userName}</p>
            <p className="details_header--sub">{ user?.email }</p>
          </div>

        </div>
      </nav>
      <Dropdown isDropDown={isDropDown} />
    </div>
  );
};

export default NavBar;
