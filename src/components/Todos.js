import React, { Component } from "react";
import TodoItems from "./TodoItems";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      // <h1>{todo.title}</h1>
      <TodoItems
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//PropTypes
Todos.ropTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired
  delTodo: PropTypes.func.isRequired
};

export default Todos;
