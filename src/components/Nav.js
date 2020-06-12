import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/forests">Forests</NavLink></li>
      <li><NavLink to="/mountains">Mountains</NavLink></li>
      <li><NavLink to="/ocean">Ocean</NavLink></li>
    </ul>    
  </nav>
);

export default Nav;