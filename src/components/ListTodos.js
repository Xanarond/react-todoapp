import React from 'react';
import TodoItem from './TodoItem';

const ListTodos = ({
  items, onToggleImportant, onToggleDone, onDelete,
}) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

export default ListTodos;
