import React, { Component } from "react";
import MessagesList from "./MessagesList";

class Feed extends Component {
  render() {
    return (
      <React.Fragment>
        <MessagesList />
      </React.Fragment>
    );
  }
}

export default Feed;
