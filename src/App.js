import React from 'react';
import './styles/main.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoList from './components/TodoList';
import { saveState } from './localStorage';

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
store.subscribe(() => {
  saveState({
    todo: store.getState().todo,
  });
});

export default App;
