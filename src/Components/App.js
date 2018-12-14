import React, { Component } from "react";
import "./App.css";
import Feed from "./Feed";
import Profile from "./Profile";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import EditProfile from "./EditProfile";
import Register from "./Register";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {/* this is saying that on these paths, no compoennt/no navbar; the * means evrything else shwos navbar */}
          <Route exact path="/editprofile" component={NavBar} />
          <Route exact path="/feed" component={NavBar} />
          <Route exact path="/profile" component={NavBar} />
          <Route exact path="/" component={null} />
          <Route exact path="/register" component={null} />
          {/* <Route exact path="*" component={null} /> */}
        </Switch>
        {/* <MessagesList /> */}
        <Switch>
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/" component={Login} />
          {/* <Route exact path="*" component={NullPath} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
