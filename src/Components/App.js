import React, { Component } from 'react';
import './App.css';
import Logout from "./Logout"
import NavBar from "./NavBar"
import Feed from "./Feed"
import Profile from "./Profile"
import { Switch, Route } from "react-router-dom";
import Login from './Login';
import  Register from './Register';
import EditProfile from './EditProfile'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/EditProfile" component={EditProfile} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;