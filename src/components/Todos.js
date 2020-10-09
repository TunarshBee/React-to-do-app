import React, { Component } from 'react';
import TodoItems from './TodoItems'
import PropTypes from 'prop-types'

class Todos extends Component{
    render(){
        return this.props.todos.map((todo)=>(
        // <h1>{todo.title}</h1>
        <TodoItems key={todo.id} todo={todo}/>
        ))
    }
}

//PropTypes
Todos.ropTypes={
    todos:PropTypes.array.isRequired
}

export default Todos;