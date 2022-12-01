import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLoggedInUserAuth } from '../../context/UserDataContextProvider';

import { auth } from '../auth/firebase';
import Dropdown from '../subNavBars/Dropdown';

const NavBar = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState('');
  const defaultPic = 'https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg';
  const [profile, setProfile] = useState(defaultPic);
  const { currentLoggedInUser } = useLoggedInUserAuth();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);

  const toggleDropDown = () => {
    setIsDropDown((prev) => !prev);
  };
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      if (currentLoggedInUser) {
        const fromStorage = await JSON.parse(localStorage.getItem('userDetails'));
        setName(fromStorage.name);
        if (fromStorage.profileURL) {
          setProfile(fromStorage.profileURL);
        }
      }
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
    <>
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
            <p className="details_header">{name}</p>
            <p className="details_header--sub">{ user?.email }</p>
          </div>

        </div>
      </nav>
      <Dropdown isDropDown={isDropDown} />
    </>
  );
};

export default NavBar;
