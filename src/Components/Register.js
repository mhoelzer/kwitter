import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../Actions/actions.js";
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

class Register extends Component {
  state = {
    username: "",
    displayName: "",
    password: ""
    // result: "" // say if failed or success; dont need b/c inside action
  };

  // function will go on dom, so need to bind correctly
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleDisplayNameChange = event => {
    this.setState({
      displayName: event.target.value
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  // if has same username, api will send an error; get list of all usernames and check forrepeats and do onBlur (when exiting that inout box; might need another endpoint to send username)
  // need to think about success and error cases
  // the fetch will have to be in redux when get there
  // register would be connected through action creator b/c the event isnt being used in handler, so this code doesnt have to be connected inside this comp and can move in avtion creator
  handleRegister = event => {
    // translate state value to get this then put elsewhere
    this.props.register({
      username: this.state.username,
      displayName: this.state.displayName,
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
          <Image src={logo} size="small" centered />
          <Header as="h2" color="grey" textAlign="center">
            Register a New Account
          </Header>
          <Form size="large">
            <Segment stacked color="grey">
              <Form.Field label="ALL FIELDS MUST HAVE 3-20 CHARACTERS" />
              {/* make sure to add the onchanges otherwise value wont work; record value whenever changes nad display vlaue when rerenders */}
              {/* required means it has to have something in it */}
              {/* value is making things customized/changing thinhs in state; without, dom controls how value is displayed */}
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
                label="Display Name:"
                required
                placeholder="Display Name"
                type="text"
                control={Input}
                onChange={this.handleDisplayNameChange}
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
                <Button positive size="large" onClick={this.handleRegister}>
                  Create Your New Account!
                </Button>
                <Button.Or />
                <Link to="/">
                  <Button size="large" color="brown">
                    Already Have an Account? Login Here!
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

// listne to state value to rerender whne changes
const mapStateToProps = state => {
  return {
    result: state.registerResult
  };
};
// thing get in is dispatch and reutnr props
const mapDispatchToProps = dispatch => {
  return {
    // neesd all state stuff to create action thing
    // register: (username, displayName, password) => dispatch(register(username, displayName, password))
    register: registerData => dispatch(register(registerData))
  };
};
// export default Register;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

// confirm password by being exactly the same?
