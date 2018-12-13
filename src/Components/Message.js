import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Divider, Card, Grid, GridColumn } from "semantic-ui-react";

class Message extends Component {
  render() {
    return (
      <Fragment>
        {/* //   place props in styling, from fragment section. */}
        <div>{this.props.text}</div>
        <div>Kweeted by {this.props.username}</div>
        <button onClick={this.props.toggleLike}>
          {this.props.isLiked ? "Unlike" : "Like"}
        </button>
        <p>Likes: {this.props.numOfLikes}</p>
      </Fragment>
    );
  }
}
export default Message;
