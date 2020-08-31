import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../store/actions/todo";

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            content: ''
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }


    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onContentChange = (e) => {
        this.setState({
            content: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {label, content} = this.state;
        this.setState({label: '', content: '',});
        const cb = this.props.onItemAdded || (() => {
        });
        cb(label, content);
    };

    handleAddTodo() {
        this.props.addTodo(this.state.label, this.state.content);
    }

    render() {
        return (
            <div className="todo-input">
                <form
                    className="bottom-panel d-flex"
                    onSubmit={this.onSubmit}
                >

                    <input
                        type="text"
                        className="todo-form"
                        onChange={this.onLabelChange}
                        value={this.state.label}
                        placeholder="Title"
                    />

                    <input
                        type="text"
                        className="todo-form"
                        onChange={this.onContentChange}
                        value={this.state.content}
                        placeholder="Content"
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
    return {
        label: state.label,
       content: state.content
    };
}

export default connect(mapStateToProps, {addTodo})(InputForm);
