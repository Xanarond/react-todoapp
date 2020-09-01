import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../store/reducers';
import TodoItem from './TodoItem';

const ListTodos = ({ todo }) => {
  console.log(todo);
  const elements = todo.map((item) => {
    const { id, label, content } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoItem label={label} content={content} />
      </li>
    );
  });

  return (<ul className="elem">{ elements }</ul>);
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});
export default connect(mapStateToProps, { getTodos })(ListTodos);
