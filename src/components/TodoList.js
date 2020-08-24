import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoHeader from './TodoHeader';
import InputForm from './InputForm';

class TodoList extends Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  render() {
    return (
      <div>
        <TodoHeader />
        <InputForm onItemAdded={this.onItemAdded} />
      </div>
    );
  }
}

export default connect()(TodoList);
