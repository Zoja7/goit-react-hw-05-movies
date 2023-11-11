import React from 'react';
import { NavLink } from 'react-router-dom';
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavLink className="headerLink" to="/">
          Home
        </NavLink>
        <NavLink className="headerLink" to="/movies">
          Movies
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
