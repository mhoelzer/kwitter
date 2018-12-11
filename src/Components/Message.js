import React, { Component, Fragment } from "react";

class Message extends Component {
  render() {
    return (
      <Fragment>
        <div>{this.props.text}</div>
        <div>{this.props.username}</div>
        <div>Kweeted by</div>
        <button onClick={this.props.toggleLike}>
          {this.props.isLiked ? "Unlike" : "Like"}
        </button>
        <p>Likes: {this.props.numOfLikes}</p>
      </Fragment>
    );
  }
}

export default Message;
