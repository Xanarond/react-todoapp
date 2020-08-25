import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputForm extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: '' });
    const cb = this.props.onItemAdded || (() => {});
    cb(label);
  };

  render() {
    return (
      <div className= "todo-input">
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}
      >

        <input
          type="text"
          className="todo-form"
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder="What needs to be done?"
        />

        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={this.handleAddTodo}
        >
          Add
        </button>
      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(InputForm);
