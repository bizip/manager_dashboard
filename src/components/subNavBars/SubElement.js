import React from 'react';
import { NavLink } from 'react-router-dom';

const SubElement = (props) => ((props.isElement === true) ? (
  <ul>
    <li className="sub__list"><NavLink to="/subelement1" className="sub__links">sub Element 1</NavLink></li>
    <li className="sub__list"><NavLink to="/subelement2" className="sub__links">sub Element 2</NavLink></li>
  </ul>
) : '');
export default SubElement;
