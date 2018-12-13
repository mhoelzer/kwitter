import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../Actions/actions.js";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Input,
  Segment
} from "semantic-ui-react";
import logo from "../logo.png";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleLogin = event => {
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <div />
          <Header as="h1" color="black" textAlign="center">
            Welcome to Kwitter!
          </Header>
          <Image src={logo} size="medium" centered />
          <Header as="h2" color="grey" textAlign="center">
            Login
          </Header>
          <Form size="large">
            <Segment stacked color="grey">
              <Form.Field
                label="Username:"
                required
                placeholder="Username"
                type="text"
                control={Input}
                autoFocus
                onChange={this.handleUsernameChange}
              />
              <Form.Field
                label="Password:"
                required
                placeholder="Password"
                type="password"
                control={Input}
                onChange={this.handlePasswordChange}
              />
              <Button.Group>
                {/* redirect */}
                {/* connected react router */}
                <Button
                  onClick={this.handleLogin}
                  positive
                  size="large"
                  to="/profile"
                >
                  Login to Your Account!
                </Button>
                <Button.Or />
                <Link to="/register">
                  <Button size="large" color="brown">
                    Don't Have an Account? Register Here!
                  </Button>
                </Link>
              </Button.Group>
              <div>{this.props.result}</div>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.loginResult
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: loginData => dispatch(login(loginData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

// 1.) User is able to enter username/password and access their account --> input boxes
// 2.) URL should be on "/"
// 3.) logging in takes you to the profile page --> need login button linked to profile
