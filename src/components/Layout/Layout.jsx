import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import css from './Layout.module.css';
const Layout = () => {
  return (
    <div>
      <header className="headerStyle">
        <NavLink className="headerLink" to="/">
          Home
        </NavLink>
        <NavLink className="headerLink" to="/movies">
          Movies
        </NavLink>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          {' '}
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
