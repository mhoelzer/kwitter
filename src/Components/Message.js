import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Divider, Card, Grid, GridColumn } from "semantic-ui-react";

class Message extends Component {
  render() {
    return (
      <Fragment>
        <Card
          color="green"
          animation="overlay"
          Icon="labeled"
          Inverted
          vertical
          width="thin"
          fluid
        >
          <Card.Content>
            <Card.Header>{this.props.text}</Card.Header>
            {/* //   place props in styling, from fragment section. */}
            <Card.Description>
              Kweeted by {this.props.username}
            </Card.Description>
            <Divider />
            <Card.Content extra>
              <button onClick={this.props.toggleLike}>
                {this.props.isLiked ? "Unlike" : "Like"}
              </button>
              <p>Likes: {this.props.numOfLikes}</p>
            </Card.Content>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}
export default Message;
