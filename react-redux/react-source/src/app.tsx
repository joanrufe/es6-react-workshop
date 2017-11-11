import * as React from 'react';
import { Link } from 'react-router';
// import { AppRouter } from './router';

export const App = (props: { children? }) => {
  return <div className="container-fluid">
        <header>
          <Link className="btn" to="/">Index</Link>
          <Link className="btn" to="/user-table">Users</Link>
        </header>
        <div className="container">
          {props.children}
        </div>
    </div>
}
