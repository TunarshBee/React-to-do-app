import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div style={headerStyle}>
            <h1 >todolist</h1>
            <Link to="/" style={LinkStyle} >Home</Link> | <Link to="/about" style={LinkStyle} >About</Link>
        </div>
    )
}

const headerStyle = {
    textAlign:'center',
    textTransform:'uppercase',
    backgroundColor:'#333',
    color:'#fff',
    fontFamily:'Rhesmanis,Avocado,stencilla,khalifah',
    marginBottom:'5px'
}
const LinkStyle = {
    textAlign:'center',
    textTransform:'uppercase',
    backgroundColor:'#333',
    color:'#fff',
    marginBottom:'5px',
    fontFamily:'avocado,stencilla,khalifah',
    textDecoration:'none',
}
