import 'react-hot-loader/patch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppProvider } from './provider';
import { AppContainer } from 'react-hot-loader';

// The following structure is necesary for react hot loader
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(AppProvider);

if (module.hot) {
  module.hot.accept('./provider', () => {
    render(AppProvider);
  });
}