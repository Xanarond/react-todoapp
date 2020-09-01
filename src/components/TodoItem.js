import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleTodo } from '../store/actions/todo';

const TodoItem = ({ label, content }) => (

  <div className="container">
    <div className="content">
      <span
        className="title"
      >
        {label}
      </span>
      <p className="">{content}</p>
    </div>
    <button
      type="button"
      className="button-item"
    >
      <FontAwesomeIcon icon={['fas', 'coffee']} />
    </button>

    <button
      type="button"
      className="button-item"
    >
      <FontAwesomeIcon icon={['fas', 'coffee']} />
    </button>

    <button
      type="button"
      className="button-item"
    >
      <i className="fas fa-trash-alt" />
    </button>
  </div>
);
export default connect(null,
  { toggleTodo })(TodoItem);
