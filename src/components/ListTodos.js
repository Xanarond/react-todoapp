import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos } from '../store/reducers';
import TodoItem from './TodoItem';

class ListTodos extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <ul className="todo-list">
        {
          todo && todo.length
            ? todo.map((curVarlue, index) => <TodoItem key={`todo-${curVarlue.id}`} todo={curVarlue} />) : 'No todos, yay!'
        }
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ getTodos }, dispatch);
const mapStateToProps = (state) => ({
  todo: state.todo,
});
export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);
