import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import * as PropTypes from 'prop-types';
import { toggleTodo } from '../store/actions/todo';

class TodoItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      index, todo, label, content, completed, toggleTodo,
    } = this.props;

    console.log(index);
    return (

      <div className="container">
        <div className="content">
          <span
            className="title"
          >
            {label}
          </span>
          <p className="">
            {content}
          </p>
        </div>
        <button
          type="button"
          className="button-item"
        >
          <FontAwesomeIcon icon={faTrashAlt} size="2x" color="red" />
        </button>

        <button
          type="button"
          className="button-item"
        >
          <FontAwesomeIcon icon={faPenAlt} size="2x" color="yellow" />
        </button>

        <button
          type="button"
          className="button-item"
          onClick={
            () => toggleTodo(index, !completed)
          }
        >
          <FontAwesomeIcon icon={faCheckSquare} size="2x" color="green" />
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  label: PropTypes.any,
  content: PropTypes.any,
  completed: PropTypes.any,
};

const mapStateToProps = (state) => ({
  idx: state.id,
});
export default connect(mapStateToProps,
  { toggleTodo })(TodoItem);
