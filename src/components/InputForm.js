import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../store/actions/todo";

class InputForm extends Component {
    constructor() {
        super();
        this.state = {
            label: '',
            content: ''
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.validateTitle = this.validateTitle.bind(this);
        this.validateText = this.validateText.bind(this)
    }

    validateTitle(label) {
        return label.length > 6;
    }

    validateText(content) {
        return content.length > 3;
    }

    onItemAdded = (label) => {
        this.setState((state) => {
            const item = this.createItem(label);
            return { items: [...state.items, item] };
        })
    };

    onLabelChange = (e) => {
        let val = e.target.value
        let valid = this.validateTitle(val);
        this.setState({
            label: e.target.value,
            labelValid: valid
        })
    };

    onContentChange = (e) => {
        let val = e.target.value
        let valid = this.validateText(val);
        this.setState({
            content: e.target.value,
            contentValid: valid
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
        this.setState({contentValid: false, labelValid: false,});
    }

    render() {
        // цвет границы для поля для ввода имени
        let titleColor = this.state.labelValid === true ? "green" : "#3d7ec0";
        // цвет границы для поля для ввода возраста
        let contentColor = this.state.contentValid === true ? "green" : "#3d7ec0";
        return (
            <div className="todo-input">
                <form
                    className="bottom-panel d-flex"
                    onSubmit={this.onSubmit}
                >

                    <input
                        type="text"
                        maxLength="20"
                        className="title-form"
                        onChange={this.onLabelChange}
                        value={this.state.label}
                        placeholder="Title"
                        style={{borderColor: titleColor}}
                    />

                    <textarea
                        type="text"
                        maxLength="70"
                        className="text-form"
                        onChange={this.onContentChange}
                        value={this.state.content}
                        placeholder="Content"
                        style={{borderColor: contentColor}}
                    />

                    <button
                        type="submit"
                        disabled={!this.state.labelValid || !this.state.contentValid}
                        className="btn"
                        onClick={this.handleAddTodo}
                    >
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

/*
const mapStateToProps = state => ({
    label: state.label,
    content: state.content
});
*/

export default connect(null, {addTodo})(InputForm);
