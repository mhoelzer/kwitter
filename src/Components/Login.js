import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <fieldset>
                <legend>Login</legend>
                <p>Username: <input placeholder="Username" type="text" className="loginInputs"></input></p>
                <p>Password: <input placeholder="Passowrd" type="text" className="loginInputs"></input></p>
                {/* change the tp="" if needed */}
                <Link to="/profile">
                    <button>Login!</button>
                </Link>
            </fieldset>
        );
    };
};

export default Login;

// 1.) User is able to enter username/password and access their account --> input boxes
// 2.) URL should be on "/"
// 3.) logging in takes you to the profile page --> need login button linked to profile