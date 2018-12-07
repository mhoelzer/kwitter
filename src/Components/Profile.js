import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

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
            <Menu.Item as={Link} to ="/EditProfile">
            edit Profile
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    displayName: state.loggedInUser.displayName,
    about: state.loggedInUser.about
  }
}
export default connect(mapStateToProps)(Sidebar1)

// class Profile extends Component {
//     render() {
//         return (
//             <div>profile</div>
//         );
//     };
// };

// export default Profile;
