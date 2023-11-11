import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const Layout = () => {
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
