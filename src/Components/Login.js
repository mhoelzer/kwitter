import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    state = {
        username: "",
        password: ""
    };
    handleChangeUsername = event => {
        this.setState({
            username: event.target.value
        })
    };
    handleChangePassword = event => {
        this.setState({
            password: event.target.value
        })
    };
    render() {
        const { username, password } = this.state;
        return (
            <fieldset>
                <legend>Login</legend>
                <p>Username:
                    {/* make sure to add the onchanges otherwise value wont work */}
                    <input placeholder="Username" type="text" className="loginInputs" autoFocus onChange={this.handleChangeUsername} value={username}></input>
                </p>
                <p>Password:
                    <input placeholder="Password" type="text" className="loginInputs" onChange={this.handleChangePassword} value={password}></input>
                </p>
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