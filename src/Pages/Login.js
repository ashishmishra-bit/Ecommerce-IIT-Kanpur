import React from 'react';
import '../css/Login.css';

const Login = () => {
    return (
        <>
        <div className="login-div">
            <div className="login-logo"></div>
            <div className="title">Login</div>
            <div className="subtitle">We keep your credentials safe.</div>
            <div className = "login-field">
                <div className="username">
               
                    <input type="username" className="user-input" placeholder="username" />                    
                </div>
                <div className="password">
                

                    <input type="password" className="pass-input" placeholder="password" />
                </div>
            </div>
            <button className ="login">Login</button>
        </div>
        </>
    )
}

export default Login
