import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import {
  Divider,
  Card,
  Grid,
  GridColumn
} from "semantic-ui-react";

class Message extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Card
            fluid
            centered
            style={{
              border: "3px solid",
              height: "auto",
              padding: "1em",
              marginBottom: "1em"
            }}
          >
            <Grid.Row
              columns={2}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <Grid.Column
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <span>{this.props.username}</span>
              </Grid.Column>
              <Switch>
                <Route path="/feed" />
              </Switch>
            </Grid.Row>

            <Grid.Row
              columns={2}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <Grid.Column>
                <Divider />
                <img />
                <Divider />
              </Grid.Column>
            </Grid.Row>
          </Card>
        </div>
        <Fragment>
          {/* //   place props in styling, from fragment section. */}
          <div>{this.props.text}</div>
          <div>{this.props.username}</div>
          <div>Kweeted by</div>
          <button onClick={this.props.toggleLike}>
            {this.props.isLiked ? "Unlike" : "Like"}
          </button>
          <p>Likes: {this.props.numOfLikes}</p>
        </Fragment>{" "}
      </Fragment>
    );
  }
};
export default Message;
