import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { userTableReducer } from './userTableReducer';
import { routerReducer } from 'react-router-redux';

export const reducers =  combineReducers({
  userTableReducer,
  routing: routerReducer
});
