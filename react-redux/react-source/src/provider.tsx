import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { App } from './app';
import { UserTableContainer } from './components/userTable';

const history = syncHistoryWithStore(hashHistory, store);

export const AppRouter = () => {
    return (
    <Router history={history}>
      <Route path="/" component={App}> 
        <IndexRoute component={UserTableContainer} />
        <Route path="user-table" component={UserTableContainer} />
      </Route>
    </Router>
  );
}


export const AppProvider = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}