import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { App } from './app';
import { AppRouter } from './router';
import { UserTableContainer } from './components/userTable';

const history = syncHistoryWithStore(hashHistory, store);

export const AppProvider = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}