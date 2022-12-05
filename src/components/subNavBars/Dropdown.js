import React from 'react';
import { FaDemocrat } from 'react-icons/fa';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { logout } from '../auth/firebase';
import DialogDemo from '../popup/Popup';


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
         <DialogDemo />
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
