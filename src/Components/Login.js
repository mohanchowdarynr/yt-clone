import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useUserProvider } from '../Context/UserContext';

const Login = ({setDetails}) => {
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const {handleUser} = useUserProvider()
    const handleClick = () => {
    setDetails({user,password});
     handleUser();
    }
    return (
        <div className="user">
            <h1>Login</h1>
            <div className="Name">
              <h3>username</h3>
              <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
            </div>
            <div className="Name">
            <h3>Password</h3>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Link to="/Home">
            <button onClick={() => handleClick()}>Login</button>
            </Link>
        </div>
    )
}

export default Login
