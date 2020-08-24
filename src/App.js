import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

import { Provider } from 'react-redux';
import store from './store/store';
import { TodoList } from './components/TodoList';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  rootElement,
);
