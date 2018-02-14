import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from './store';
import { App } from './app';
import { UserTableContainer } from './components/userTable';
import { DemoMaterialUI } from './components/materialUI';

const history = syncHistoryWithStore(hashHistory, store);

export const AppRouter = () => {
    return (
    <Router history={history}>
      <Route path="/" component={App}> 
        <IndexRoute component={UserTableContainer} />
        <Route path="user-table" component={UserTableContainer} />
        <Route path="material-ui" component={DemoMaterialUI} />
      </Route>
    </Router>
  );
}