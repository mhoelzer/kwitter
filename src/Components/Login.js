import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Card, Form, Header, Image, Input, } from "semantic-ui-react";

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    };
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    };

    render() {
        const { username, password } = this.state;
        return (
            // <Card>
                <Form>
                    <Header as="h1">Login</Header>
                    <p>Username:
                    {/* make sure to add the onchanges otherwise value wont work */}
                        <input placeholder="Username" type="text" className="loginInputs" autoFocus onChange={this.handleUsernameChange} value={username}></input>
                    </p>
                    <p>Password:
                    <input placeholder="Password" type="password" className="loginInputs" onChange={this.handlePasswordChange} value={password}></input>
                    </p>
                    {/* change the tp="" if needed */}
                    <Link to="/profile">
                        <button>Login!</button>
                    </Link>
                </Form>
            // </Card>
        );
    };
};

export default Login;

// 1.) User is able to enter username/password and access their account --> input boxes
// 2.) URL should be on "/"
// 3.) logging in takes you to the profile page --> need login button linked to profile