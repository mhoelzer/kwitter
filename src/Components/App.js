import React, { Component, Fragment } from "react";
import "./App.css";
import Login from "./Login";
import NavBar from "./NavBar";
import Register from "./Register";
import Messages from "./Messages";
import { Switch, Route } from "react-router-dom";
import { MessagesList } from "./index";
import { Grid, GridColumn } from "semantic-ui-react"


class App extends Component {
  renderMain = () => (
    <Fragment>
      
          <NavBar />
        <MessagesList />
    
    </Fragment>
  );

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" render={this.renderMain} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
