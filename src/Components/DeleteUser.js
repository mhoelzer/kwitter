// this will get referenced in the edit profile
import React, { Component } from "react";
import { deleteUser } from "../Actions/actions";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
// import DeleteUser from "./DeleteUser"
// <DeleteUser/>


class DeleteUser extends Component {
  handleDeleteUser = event => {
    this.props.deleteUser();
  };
  render() {
    return (
        <Button onClick={this.handleDeleteUser}>Delete User</Button>
    )
  }
}
// const mapStateToProps = state => {
//     return {
//         token: state.authorization.token
//     }
// }
const mapDispatchToProps = dispatch => {
  return {
    deleteUser: (token) => dispatch(deleteUser(token))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(DeleteUser);
