import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class TodoItems extends Component {

    getStyle=()=>{
        return  {
            textDecoration: this.props.todo.completed ?
             "line-through": "none",
             color:"red",
             backgroundColor:"#f4f4f4",
             padding:"10px",
             borderBottom:"1px #ccc dotted"
        }
    }

    markComplete=(e)=>{
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <p style={this.getStyle()}><input type='checkbox' onChange={this.markComplete}/>{' '}
                    { this.props.todo.title }
                </p>
            </div>
        )
    }
}
//PropTypes
TodoItems.ropTypes={
    todo:PropTypes.object.isRequired
}
export default TodoItems
