import React, { Component } from "react";
import MessagesList from "./MessagesList";

class Feed extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{textAlign:"center"}}>Feed</h1>
        <MessagesList />
      </React.Fragment>
    );
  }
}

export default Feed;
