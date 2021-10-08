import React from 'react'
import { Link } from 'react-router-dom'
import './error.css';
import { useUserProvider } from '../Context/UserContext';

const Error = () => {
    const {logged} = useUserProvider();
    return (
        <>{
            logged ? (
                <div className="pop">
            <h1>Your login is successfull</h1>
            <Link to="/Home"><button>Move to home</button></Link>
        </div>
            ) : (
                <div className="pop">
            <h1>You need to login</h1>
            <Link to="/"><button>Login here</button></Link>
        </div>
            )
        }
        
        </>
    )
}

export default Error
