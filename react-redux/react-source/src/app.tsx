import * as React from 'react';
import { Link } from 'react-router';

export const App = (props) => {
  return <div className="container-fluid">
        <header>
          <Link className="btn" to="/">Index</Link>
          <Link className="btn" to="/user-table">Users</Link>
          <Link className="btn" to="/material-ui">Demo Material UI</Link>
        </header>
        <div className="container">
          {props.children}
        </div>
    </div>
}
