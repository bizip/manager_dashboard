import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsPieChart } from 'react-icons/bs';
import { HiOutlinePresentationChartLine } from 'react-icons/hi';
import { TbChartPie4 } from 'react-icons/tb';
import { MdOutlineSettingsApplications } from 'react-icons/md';
import { SlDiamond } from 'react-icons/sl';
import { AiOutlineTable } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import SubElement from '../subNavBars/SubElement';

const Sidebar = () => {
  const [element, setElement] = useState(false);

  const toggleElement = () => {
    setElement((prev) => !prev);
  };
  return (
    <section className="sidebar">
      <h3 className="side_header">UI COMPONENTS</h3>
      <ul className="elements">
        <li className="link_container">
          <div className="link_left">
            <SlDiamond className="link__icon" />
            <NavLink to="." className="link__sidebar" onClick={toggleElement}>Elements</NavLink>
          </div>
          <IoIosArrowDown className="link__icon" />
        </li>
        <SubElement isElement={element} />
        <li className="link_container">
          <div className="link_left">
            <div className="link_left">
              <HiOutlinePresentationChartLine className="link__icon" />
              <NavLink to="example2" activeClassName="active" className="link__sidebar">Components</NavLink>
            </div>
          </div>
          <IoIosArrowDown className="link__icon" />
        </li>
        <li className="link_container">
          <div className="link_left">
            <AiOutlineTable className="link__icon" />
            <NavLink to="example3" activeClassName="active" className="link__sidebar">Tables</NavLink>
          </div>
          <IoIosArrowDown className="link__icon" />
        </li>
      </ul>

      <h3 className="side_header">DASHBOARD WIDGETS</h3>
      <ul className="widgets">
        <li className="link_container">
          <div className="link_left">
            <BsPieChart className="link__icon" />
            <NavLink to="example4" activeClassName="active" className="link__sidebar">Chart boxes 1</NavLink>
          </div>
        </li>
        <li className="link_container">
          <div className="link_left">
            <HiOutlinePresentationChartLine className="link__icon" />
            <NavLink to="example5" activeClassName="active" className="link__sidebar">Chart boxes 2</NavLink>
          </div>
        </li>
        <li className="link_container">
          <div className="link_left">
            <TbChartPie4 className="link__icon" />
            <NavLink to="example6" activeClassName="active" className="link__sidebar">Chart boxes 3</NavLink>
          </div>
        </li>
        <li className="link_container">
          <div className="link_left">
            <MdOutlineSettingsApplications className="link__icon" />
            <NavLink to="exmple7" activeClassName="active" className="link__sidebar">Profile Boxes</NavLink>
          </div>
        </li>
        <li className="link_container">
          <div className="link_left">

            <MdOutlineSettingsApplications className="link__icon" />
            <NavLink to="example8" activeClassName="active" className="link__sidebar">Applications</NavLink>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
