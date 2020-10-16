import React from 'react'

export default function Header() {
    return (
        <div>
            <h1 style={headerStyle}>todolist</h1>
        </div>
    )
}

const headerStyle = {
    textAlign:'center',
    textTransform:'uppercase',
    backgroundColor:'#333',
    color:'#fff',
    marginBottom:'5px'
}
