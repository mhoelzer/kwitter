import React, { Fragment } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
import { connect } from "react-redux";
import { composeMessage } from "../Actions/actions";

class ComposeMessage extends React.Component {
  state = {
    text: ""
  };

  handleMessageSubmit = event => {
    this.setState({ text: event.target.value });
  };

  handleComposeMessageProfileEnter = event => {
    if (event.key === "Enter") {
      this.props.composeMessage(this.state.text);
      this.setState({ text: "" });
    }
  };

  // handleComposeMessageProfileButton = event => {
  //   this.props.composeMessage(this.state.text);
  //   this.setState({ text: "" });
  // };

  displayFeed = () => {
    return (
      <Form
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <TextArea
          placeholder="What would you like to Kweet about today?"
          onChange={this.handleMessageSubmit}
          value={this.state.text}
          // onKeyPress={this.handleComposeMessageProfileEnter}
          maxLength="255"
          style={{ maxWidth: "36em" }}
        />
        <Button
          style={{
            color: "rgb(45,45,45)",
            padding: "5px"
          }}
          onClick={this.handleComposeMessageProfileButton}
        >
          Kweet
        </Button>
      </Form>
    );
  };

  render() {
    return <Fragment>{this.displayFeed()}</Fragment>;
  }
}

function mapStateToProps(state) {
  return {
    userID: state.userID
  };
}

const mapDispatchToProps = dispatch => {
  return {
    composeMessage: text => {
      dispatch(composeMessage(text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeMessage);
