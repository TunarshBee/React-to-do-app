import React from "react";
const TodoItems = ({ todo, delTodo }) => {
  const { id, title, dir } = todo;

  const getStyle = () => {
    return {
      color: "black",
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      width:"70%",
      display: "inline-flex",
      justifyContent: "space-between",
      alignItems: "center",
    };
  };
  if (title === "" || dir === "") {
    return <div>Please type something in the input fields</div>;
  } else {
    return (
      <div>
        <p style={getStyle()}>
          <span>{title}</span>
          <span>{dir}</span>
        </p>
        <button style={btnStyle} onClick={() => delTodo(id)}>
          Remove
        </button>
      </div>
    );
  }
};

const btnStyle = {
  backgroundColor: "#f00",
  color: "#fff",
  padding: "15px 39px",
  border: "none",
  float: "right",
  // borderRadius: "50%",
  outline: "none",
  cursor: "pointer",
  flex: "1",
  margin: "16px",
};
export default TodoItems;
