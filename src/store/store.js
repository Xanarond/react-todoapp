import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import todoReducer from './reducers';
import { loadState } from '../localStorage';

const rootReducer = combineReducers({
  todo: todoReducer,
});
const persistedState = loadState();
export default createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));
