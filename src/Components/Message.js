import React, { Component } from "react";
import { connect } from "react-redux";
import {
 Button,
 Card,
 Divider,
 Grid,
 Header,
 Image,
 Menu,
 Segment
} from "semantic-ui-react";
import MessageList from "./MessagesList";

class Message extends Component {
  render() {
    return (
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={4}>
            <Card
            animation="overlay"
            Inverted
            vertical
            width="thin"
            fluid
          >
          <Card.Content>
            <Segment>
              <Card.Header as="h3" textAlign="center">
                {this.props.username}
              </Card.Header>
            </Segment>
            <Card.Description>
              <Card.Meta as="h3">Name:</Card.Meta>
              {this.props.displayName}
            </Card.Description>
            <Card.Description>
              <Card.Meta as="h3">Kweeted:</Card.Meta>
              {this.props.text}
            </Card.Description>
            <Card.Description>
              <Card.Meta as="h3">Likes:</Card.Meta>
              {this.props.numOfLikes}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button size="small" color="twitter" fluid>
            {this.props.numOfLikes} Like
            </Button>
            </Card.Content>
            </Card>

          {/* //   place props in styling, from fragment section. */}
          {/* <div>{this.props.text}</div>
          <div>Kweeted by</div>
          <div>{this.props.username}</div>
          <button onClick={this.props.toggleLike}>
            {this.props.isLiked ? "Unlike" : "Like"}
          </button>
          <p>Likes: {this.props.numOfLikes}</p> */}
          </Grid.Column>
          </Grid.Row>
     </Grid>
     );
     }
     }

     const mapStateToProps = state => {
       return {
         displayName: state.loggedInUser.displayName
       };
     };
export default connect(mapStateToProps)(Message);
