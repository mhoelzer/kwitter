import React, { Component } from "react";
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
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { connect } from "react-redux";
import MessageList from "./MessagesList";
import ComposeMessage from "./ComposeMessage";
import UserMessages from "./UserMessages";

class Sidebar1 extends Component {
  render() {
    return (
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={6}>
            <Card
              color="green"
              as={Menu}
              animation="overlay"
              Icon="labeled"
              Inverted
              vertical
              width="thin"
              fluid
            > 
              <Card.Content>
                <Image src={logo} />
                <Segment style={{ padding: "1em 0em" }} inverted color="green">
                  <Card.Header as="h2" textAlign="center">
                    {this.props.username}
                  </Card.Header>
                </Segment>
                <Card.Description>
                  <Card.Meta as="h2">Display Name:</Card.Meta>
                  {this.props.displayName}
                </Card.Description>
                <Divider />
                <Card.Description>
                  <Card.Meta as="h2">About Me:</Card.Meta>
                  {this.props.about}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link to="/editprofile">
                  <Button size="large" color="black" fluid>
                    Edit Profile
                  </Button>
                </Link>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column floated="right" width={10}>
            <Segment basic>
              <Header as="h3">My Messages</Header>
              <ComposeMessage />
              <UserMessages />
              {/* <MessageList />  */}{" "}
              {/* this will be for personal and making messages */}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const profilePicture = () => (
  <div>
    <Image size="tiny" verticalAlign="top" /> <span>Top Aligned</span>
    <Divider />
  </div>
);

const mapStateToProps = state => {
  return {
    displayName: state.loggedInUser.displayName,
    about: state.loggedInUser.about,
    username: state.loggedInUser.username
  };
};
export default connect(
  mapStateToProps,
  profilePicture
)(Sidebar1);
