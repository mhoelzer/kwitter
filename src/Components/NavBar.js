import React, { Component } from "react";
import Logout from "./Logout";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import DeleteUser from "./DeleteUser";

export default class Navbar extends Component {
  state = { activeItem: "profile" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Menu.Item
          as={Link}
          name="feed"
          active={activeItem === "feed"}
          onClick={this.handleItemClick}
          exact
          to="/feed"
        />
        <Menu.Item
          name="profile"
          as={Link}
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
          exact
          to="/profile"
        />
        <Menu.Item
          name="kweets"
          as={Link}
          active={activeItem === "kweets"}
          onClick={this.handleItemClick}
          exact
          to="/messageslist"
        />
        <DeleteUser />
        <Logout />
      </Menu>
    );
  }
}
