import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

const NavBar = () => (
  <nav className="nav_container">
    <div className="nav__left">
      <h2>architect</h2>
      <HiMenu className="nav__hamberger" />
    </div>

    <div className="nav__right">
      <div className="nav__avatar">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?i
                xlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW
                58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          className="avatar__profile"
          alt="Avatar"
        />

        <IoIosArrowDown className="avatar__dropdown" />
      </div>

      <div className="avatar__details">
        <p className="details_header">Aliana Mclourd</p>
        <p className="details_header--sub">VP people manager</p>
      </div>

    </div>
  </nav>
);

export default NavBar;
