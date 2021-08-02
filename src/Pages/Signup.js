import React from 'react'

const Signup = () => {
    return (
        <>
            <div className="login-div">
                <div className="login-logo"></div>
                <div className="title">Signup</div>
                <div className="subtitle">We keep your credentials safe.</div>
                <div className="login-field">
                    <div className="username">

                        <input type="username" className="user-input" placeholder="username" />
                    </div>
                    <div className="password">


                        <input type="password" className="pass-input" placeholder="password" />

                    </div>
                    <div className="password">
                        <input type="password" className="pass-input" placeholder="confirm password" />
                    </div>
                </div>
                <button className="login">Signup</button>
            </div>
        </>
    )
}

export default Signup
