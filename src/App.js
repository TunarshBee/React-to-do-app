import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from './layout/Header';
import uuid, { v4 } from 'uuid';
import AddTodo from './components/AddTodo';
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash bin",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "Dinner with wife",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };

  // Function To Toggle Completed
  markComplete = (id) => {
    console.log();
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Function To Delete Todo
  delTodo = (id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]})
  }

  addTodo=(title)=>{
    const newTodo={
      id: uuid.v4(),
      title,
      completed:false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
