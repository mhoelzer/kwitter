import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: "home" };

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
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
