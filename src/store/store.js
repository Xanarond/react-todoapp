import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { todoReducer } from './reducers';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
