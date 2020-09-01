import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const ListTodos = ({ todo }) => {
  const elements = todo.map((item) => {
    const {
      id, label, content, completed,
    } = item;
    console.log(id);
    return (
      <li key={id} className="list-group-item">
        <TodoItem index={id} label={label} content={content} completed={completed} />
      </li>
    );
  });

  return (<ul className="elem">{ elements.reverse() }</ul>);
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});
export default connect(mapStateToProps)(ListTodos);
