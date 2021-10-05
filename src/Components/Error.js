import React from 'react'
import { Link } from 'react-router-dom'
import './error.css';

const Error = () => {
    return (
        <div className="pop">
            <h1>You are not loggedin</h1>
            <Link to="/"><button>Login here</button></Link>
        </div>
    )
}

export default Error