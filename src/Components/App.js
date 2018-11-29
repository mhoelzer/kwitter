import React, { Component } from 'react';
import './App.css';
import Login from "./Login"
import NavBar from "./NavBar"
import Register from "./Register"
import Messages from "./Messages"
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/" component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;