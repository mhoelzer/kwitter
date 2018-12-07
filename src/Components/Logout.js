import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { logout } from "../Actions/actions";
import { connect } from "react-redux";

class Logout extends Component {
  handleLogout = event => {
    this.props.logout();
  };

  render() {
    return (
      <React.Fragment>
        <Menu.Menu position="right">
          <Menu.Item name="logout" onClick={this.handleLogout} />
        </Menu.Menu>
      </React.Fragment>
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
