import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
};

onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' });
  };

  render() {
    return (
      <div>
        <form style={{ display: "flex" }} onSubmit={this.onSubmit} >
          <input
            type="text"
            style={{ flex: "10", padding: "5px" }}
            name="title"
            placeholder="Add Todo..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Add Todo"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;