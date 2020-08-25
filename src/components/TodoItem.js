import React from 'react';
import { connect } from 'react-redux';

function TodoItem({ todo,
  content, done, label, onToggleImportant, onToggleDone, onDelete,
}) {
  return (
    <span>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}
      >
        {label}
        {content}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDelete}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}

export default connect(null)(TodoItem);
