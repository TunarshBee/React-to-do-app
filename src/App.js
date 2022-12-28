import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const App = ()=> {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=0')
    .then(res=> setTodos(res.data))
  }, [])

  // Function To Delete Todo
  const delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => setTodos([...todos.filter((todo) => todo.id !== id)]))
   
  };

  const addTodo = (title,dir) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {title,
    completed : false,
    dir
    })
    .then(res => setTodos([...todos, res.data] ));
  };

  
    return (
      <>
        <div className="App">
          <div className="container">
            {/* <Header /> */}
            
                      <AddTodo addTodo={addTodo} />
                      <Todos
                        todos={todos}
                        delTodo={delTodo}
                      />
          </div>
        </div>
      </>
    );
  
}

export default App;
