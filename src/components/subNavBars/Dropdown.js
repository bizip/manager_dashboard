import React from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { logout } from '../auth/firebase';

const handleLogoutUser = () => {
  logout();
};

const Dropdown = (props) => ((props.isDropDown === true) ? (
  <div className="dropdown">
    <div className="dropdown-content">
      <p>My profile</p>
      <li className="link_container_drop">
        <div className="link_left">
          <RiLogoutBoxRLine className="link__icon" />
          <NavLink to="/edit" className="link__sidebar" onClick={handleLogoutUser}>Edit Profile</NavLink>
        </div>
      </li>

      <li className="link_container_drop">
        <div className="link_left">
          <RiLogoutBoxRLine className="link__icon" />
          <NavLink to="." className="link__sidebar" onClick={handleLogoutUser}>Logout</NavLink>
        </div>
      </li>
    </div>
  </div>
) : '');
export default Dropdown;
