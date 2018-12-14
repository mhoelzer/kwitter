import React, { Component } from "react";
import {
  Form,
  Grid,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import { updateUser } from "../Actions/actions.js";
import DeleteUser from "./DeleteUser";

class EditProfile extends Component {
  state = { displayName: "", password: "", about: "" };

  handleChange = (e, { value }) => this.setState({ [e.target.name]: value });
  handleSubmit = (e, { value }) => {
    this.props.updateUser({ ...this.state });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as="h2" color="brown" icon>
            <Icon name="settings" />
            Edit your profile!
            <Header.Subheader>
              Change your display name and password, and update all the
              wonderful facts about you!
            </Header.Subheader>
          </Header>
          <Form size="large">
            <Segment stacked color="grey">
              <Form.Input
                onChange={this.handleChange}
                name="displayName"
                fluid
                label="Display Name"
                placeholder="Display Name"
              />
              <Form.Input
                onChange={this.handleChange}
                name="password"
                fluid
                label="Password"
                placeholder="Password"
              />
              <Form.TextArea
                onChange={this.handleChange}
                name="about"
                label="About"
                placeholder="Tell us more about you..."
              />

              <Form.Button color="green" onClick={this.handleSubmit}>
                <Icon name="checkmark" /> Confirm Changes
              </Form.Button>
              <DeleteUser />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: userData => dispatch(updateUser(userData))
  };
};
const mapStateToProps = state => {
  return {
    token: state.authentication.token
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
