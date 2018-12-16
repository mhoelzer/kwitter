import React, { Component } from "react";
import { Button, Dimmer, Divider, Header, Icon, Menu } from "semantic-ui-react";
import { logout } from "../Actions/actions";
import { connect } from "react-redux";

class Logout extends Component {
  state = {};

  handleLogout = event => {
    this.props.logout();
    this.setState({ active: false });
  };

  handleOpen = () => this.setState({ active: true });

  render() {
    const { active } = this.state;
    return (
      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={this.handleOpen} />
        <Dimmer active={active} page>
          <Header as="h2" icon inverted>
            <Icon name="heart" />
            <Menu.Item>Thanks for visiting KWITTER! Come back soon!</Menu.Item>
            <Divider />
            <Button
              name="logout"
              onClick={this.handleLogout}
              size="massive"
              color="yellow"
            >
              GOODBYE!!!
            </Button>
          </Header>
        </Dimmer>
      </Menu.Menu>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Logout);
