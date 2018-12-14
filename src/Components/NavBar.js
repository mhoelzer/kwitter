import React, { Component } from "react";
import Logout from "./Logout";
import { Container, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default class Navbar extends Component {
  state = { activeItem: "profile" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu pointing color="green" inverted>
          <Menu.Item header inverted>
            <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
            Kwitter
          </Menu.Item>
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
          {/* <DeleteUser /> */}
          <Menu.Menu position="right">
            <Logout />
          </Menu.Menu>
        </Menu>
        <div />
      </Container>
    );
  }
}
