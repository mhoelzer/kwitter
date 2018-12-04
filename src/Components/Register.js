import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.png"
import { connect } from 'react-redux';
import { register } from "../Actions/actions.js";

class Register extends Component {
    state = {
        username: "",
        displayName: "",
        password: "",
        // result: "" // say if failed or success; dont need b/c inside action 
    };

    // function will go on dom, so need to bind correctly
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    };
    handleDisplayNameChange = event => {
        this.setState({
            displayName: event.target.value
        })
    };
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
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
        })
    }

    render() {
        // const { username, password, displayName } = this.state;
        return (
            <fieldset>
                <legend>Register</legend>
                <p>ALL FIELDS MUST HAVE 3-20 CHARACTERS</p>
                <p>Username:
                    {/* make sure to add the onchanges otherwise value wont work; record value whenever changes nad display vlaue when rerenders */}
                    {/* required means it has to have something in it */}
                    {/* value is making things customized/changing thinhs in state; without, dom controls how value is displayed */}
                    <input required placeholder="Username" type="text" className="loginInputs" autoFocus onChange={this.handleUsernameChange}></input>
                </p>
                <p>Display Name:
                    {/* make sure to add the onchanges otherwise value wont work */}
                    <input required placeholder="Display Name" type="text" className="loginInputs" onChange={this.handleDisplayNameChange}></input>
                </p>
                <p>Password:
                    {/* could make change/see it based on checkbox */}
                    <input required placeholder="Password" type="password" className="loginInputs" onChange={this.handlePasswordChange}></input>
                </p>
                {/* change the tp="" if needed */}
                {/* <Link to="/profile"> */}
                    <button onClick={this.handleRegister}>Create Your New Account!</button>
                    <div>{this.props.result}</div>
                {/* </Link> */}
            </fieldset>
        );
    };
};

// listne to state value to rerender whne changes
const mapStateToProps = (state) => {
    return {
        result: state.registerResult
    }
}
// thing get in is dispatch and reutnr props
const mapDispatchToProps = (dispatch) => {
    // const registerData = {

    // }
    return {
        // neesd all state stuff to create action thing
        // register: (username, displayName, password) => dispatch(register(username, displayName, password))
        register: (registerData) => dispatch(register(registerData))
    }
}

// export default Register;
export default connect(mapStateToProps, mapDispatchToProps)(Register);

// cancel button clears info?
// could add in validations? 
// confirm password by being exactly the same?