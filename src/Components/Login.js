import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useUserProvider } from '../Context/UserContext';

const Login = () => {
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const {handleUser} = useUserProvider();

    const handleClick = () => {
       if(user && password){
        handleUser();
       }else{
         alert('Enter both user and password');
       }
    }

    return (
        <div className="user">
            <h1>Login</h1>
            <div className="Name">
              <h3>username</h3>
              <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required/>
            </div>
            <div className="Name">
            <h3>Password</h3>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <Link to="/Home">
            <button onClick={handleClick}>Login</button>
            </Link>
        </div>
    )
}

export default Login
