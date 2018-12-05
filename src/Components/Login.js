import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Input, Segment } from "semantic-ui-react";

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
            <React.Fragment className="registerForm">
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.registerForm {
                        height: 100%;
                    }
                `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h1" color="blue" textAlign="center">Login</Header>
                        <Form size="large">
                            <Segment stacked>
                                <Form.Field label="Username:" required placeholder="Username" type="text" control={Input} autoFocus onChange={this.handleUsernameChange} />
                                <Form.Field label="Password:" required placeholder="Password" type="password" control={Input} onChange={this.handlePasswordChange} />
                                <Button.Group>
                                    <Link to="/profile"> {/* change the to="" if needed */}
                                        <Button onClick={this.handleRegister} positive size="large">Login to Your Account!</Button>
                                        {/* <div>{this.props.result}</div> */}
                                    </Link>
                                    <Button.Or />
                                    <Link to="/register">
                                        <Button size="large">Don't Have an Account? Register Here!</Button>
                                    </Link>
                                </Button.Group>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    };
};

export default Login;

// 1.) User is able to enter username/password and access their account --> input boxes
// 2.) URL should be on "/"
// 3.) logging in takes you to the profile page --> need login button linked to profile