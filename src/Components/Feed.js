import React, { Component } from "react";
import MessagesList from "./MessagesList";
import NavBar from "./NavBar"


class Feed extends Component {
  render() {
    return (
      <React.Fragment>
          <NavBar/>
        <div>feed</div>
        <MessagesList />
      </React.Fragment>
    );
  }
}

export default Feed;
