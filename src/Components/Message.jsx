import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import {
  Icon,
  Divider,
  Container,
  Card,
  Grid,
  GridColumn
} from "semantic-ui-react";
import { likeMessage } from "../Actions/actions";
class Message extends Component {
  state = {
    isLiked: this.props.isLiked,
    totalLikes: this.props.totalLikes,
    likeId: this.props.likeId
  };

  handleLikeMessage = () => {
    this.props
      .likeMessage(
        this.props.userId,
        this.props.messageId,
        this.props.auth.token
      )
      .then(like => {
        return this.setState({
          isLiked: true,
          totalLikes: this.state.totalLikes + 1,
          likeId: like
        });
      });
  };

  likeMessage = () => {
    return (
      <GridColumn
        style={{
          color: "rgb(45,45,45"
        }}
      >
        <span>{"Likes: ${this.state.totalLikes}"}</span>
        <Icon
          link
          onClick={this.handleLikeMessage}
          name="thumbs up outline"
          size="large"
          style={{
            color: "rgb(225,225,225",
            marginLeft: 5,
            marginBottom: 5
          }}
        />
      </GridColumn>
    );
  };
  render() {
    return (
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
            justifyContent: "space-evenly",
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
            <Route path="/feed"/>
        </Switch>
        </Grid.Row>
        
        <Grid.Row
        columns={2}
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
        }}
        >
        <Grid.Column>
            <Divider></Divider>
            <img
        />
        <Divider></Divider>
        </Grid.Column>
        </Grid.Row>
        </Card>
        </div>

    );
  }
}

const mapStatetoProps = ({ auth, messages }) => ({
  auth,
  messages
});

const mapDispatchtoProps = dispatch => {
  return {
    likeMessage: (userId, messageId, token) => {
      return dispatch(likeMessage(userId, messageId, token));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Message);

