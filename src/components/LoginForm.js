import React, { useState } from 'react'

const LoginForm = () => {
    const [display, setDisplay] = useState('')
    const handleClick = (value) => {
        value === 0 ? setDisplay('Student') : setDisplay('Faculty')
    }

    return (
        <form className="login-form">
            <div className="radio">
                <div className="radio-select">
                    <input onClick={() => handleClick(0)} type="radio" id="student" name="login" value="student" />
                    <label htmlFor="student">Student</label>
                </div>
                <div className="radio-select">
                    <input onClick={() => handleClick(1)} type="radio" id="faculty" name="login" value="faculty" />
                    <label htmlFor="faculty">Faculty</label><br />
                </div>
            </div>
            <div className="login-details">
                <h3>Login as {display}</h3>
                <h3>{display} Id : </h3>
                <input className="login-input" type="text" />
                <h3>Password : </h3>
                <input className="login-input" type="password" />
            </div>
            <div className="btn">
                <button className="login-btn" type="submit">Log In</button>
            </div>
        </form>
    )
}

export default LoginForm