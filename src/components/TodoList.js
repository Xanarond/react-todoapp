import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoHeader from './TodoHeader';
import InputForm from './InputForm';
import ListTodos from './ListTodos';

class TodoList extends Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  render() {
    return (
      <div className="todo-app">
        <TodoHeader />
        <InputForm onItemAdded={this.onItemAdded} />
        <ListTodos />
      </div>
    );
  }
}

export default connect()(TodoList);
