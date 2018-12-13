import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar,
  Divider, 
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MessageList from "./MessagesList";
import ComposeMessage from "./ComposeMessage";
import UserMessages from "./UserMessages";

class Sidebar1 extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSideBarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show Sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide Sidebar
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            Icon="labeled"
            Inverted
            onHide={this.handleSideBarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">{this.props.displayName}</Menu.Item>
            <Menu.Item as="a">{this.props.about}</Menu.Item>
            <Menu.Item as={Link} to="/editprofile">
              edit Profile
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">My Messages</Header>
              <ComposeMessage />
              <UserMessages />
              {/* <MessageList />  */}{" "}
              {/* this will be for personal and making messages */}
              <div>creasting your messages should go here</div>
              <div>TESTsfdsd f, INGLD</div>
              <div>messages should go here</div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}


const profilePicture = () => (
  <div>
    <Image size='tiny' verticalAlign='top' /> <span>Top Aligned</span>
    <Divider />
  </div>
)

const mapStateToProps = state => {
  return {
    displayName: state.loggedInUser.displayName,
    about: state.loggedInUser.about
  };
};
export default connect(
  mapStateToProps,
  profilePicture
)(Sidebar1);