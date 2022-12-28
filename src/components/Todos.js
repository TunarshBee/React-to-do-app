import React from "react";
import TodoItems from "./TodoItems";


const Todos =({todos, delTodo}) => {
  return<div>
      {
        todos.map( todo =>{
          return <TodoItems
            key={todo.id}
            todo={todo}
            delTodo={delTodo}
          />;
        })
      }
    </div>
}


export default Todos;
