import React, { Component } from "react";
import PropTypes from "prop-types";
export class TodoItems extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      color: "red",
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div>
        <p style={this.getStyle()}>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    );
  }
}
//PropTypes
TodoItems.ropTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle={
    backgroundColor:"#f00",
    color:"#fff",
    padding:"5px 9px",
    border:"none",
    float:'right',
    borderRadius:'50%',
    outline:'none',
    cursor:'pointer',
}
export default TodoItems;
