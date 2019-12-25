import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import ApiService from '../apiService';
import listReducer from './modules/list';

const getMiddlewares = () => {
  const logger = createLogger({ collapsed: true });
  return [thunk.withExtraArgument(new ApiService()), logger];
};

export default (initialState = {}) => {
  const reducer = combineReducers({ list: listReducer });
  const middlewares = getMiddlewares();

  return createStore(reducer, initialState, applyMiddleware(...middlewares));
};
