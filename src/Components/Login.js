import React, { useState } from 'react';
import './login.css';
import { useUserProvider } from '../Context/UserContext';
import Error from './Error';

const Login = () => {
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const {logged,handleUser} = useUserProvider();

    const handleClick = () => {
       if(user && password){
        handleUser();
       }else{
         alert('Enter both user and password');
       }
    }

    return (
      <>
      {
        logged ? (
          <Error /> )
          : (
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
            <button onClick={handleClick}>Login</button>
        </div>
        )
      }
        
    </>)
}

export default Login
