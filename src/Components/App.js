import React, { Component } from 'react';
import './App.css';
import Logout from "./Logout"
import NavBar from "./NavBar"
import Feed from "./Feed"
import Profile from "./Profile"
import { Switch, Route } from "react-router-dom";
import Login from './Login';
import  Register from './Register';
import Messages from "./Messages";
import MessagesList from "./Messages";

class App extends Component {
 /* renderMain = () => (
    <React.Fragment>
      
        <MessagesList />
    
    </React.Fragment>
  );*/

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MessagesList />
        <Switch>
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/messages" component={Messages} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
