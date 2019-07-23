import React, { Component } from "react";
import { connect } from 'react-redux';
import { add_task } from '../actions/action';

function mapDispatchToProps(dispatch){
    return {
        add_task: task => dispatch(add_task(task))
    }
}

class FormTask extends Component {
    state = {
        title: "", done: false
    }
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const { done } = this.state;
        this.props.add_task({title, done});
        this.setState({title: "", done: false})
    
    }

    render(){
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={this.handleChange}
                />
                <label>
                    Done:
                </label>
                <input
                    type="radio"
                    className="form-control"
                    id="done"
                    value={true}
                    onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(FormTask);
export default Form;