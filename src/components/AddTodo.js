import React, { useState } from "react";


const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [dir, setDir] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDir = (e) => {
    setDir(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(title, dir);
    setTitle("");
    setDir('')
  };

  return (
    <div>
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
      <b>Movie Title</b>
        <input
          type="text"
          style={{ flex: "10", padding: "5px", margin: "16px" }}
          name="title"
          placeholder="Add Todo..."
          value={title}
          onChange={onChange}
          />
          <b>Directors</b>
        <input
          type="text"
          style={{ flex: "10", padding: "5px", margin: "16px" }}
          name="title"
          placeholder="Add Todo..."
          value={dir}
          onChange={onChangeDir}
        />
        <input
          type="submit"
          value="Add "
          className="btn"
          style={{ flex: "1", padding: "15px 30px", margin: "16px" }}
        />
      </form>
    </div>
  );
};

export default AddTodo;
