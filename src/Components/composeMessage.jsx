import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { compose } from "../../../../Library/Caches/typescript/3.0/node_modules/redux";
import { ReactComponent } from "*.svg";
import { fetchMessages, findSingleUser, postMessageProfile, composeMessageFeed } from "../Actions/actions";

class NewKweet extends React.Component {
  state = {
    message: ""
  };

  handleMessageSubmit = (event) => {
    this.setState({ message: event.target.value });
  };

  kweetForm = () => {
    return (
      <Form
        style={{
          marginTop: "10em",
          marginBotom: "2em",
        }}
      >
        <TextArea
          placeholder="What would you like to Kweet about today?"
          onChange={this.handleMessageSubmit}
          value={this.state.message}
          onkeyPress={this.handleComposeMessageProfileEnter}
          maxLength="255"
        />
        <Button
          style={{
            color: "rgb(45,89,120)",
            padding: "5px"
          }}
          onClick={this.handleComposeMessageProfileButton}
        >
          Kweet
        </Button>
      </Form>
    );
  };

  handleComposeMessageProfileEnter = event => {
    if (event.target.key === "Kweet") {
      this.props.postMessageProfile(
        this.props.token,
        this.state.message,
        this.props.userID
      );
      this.props.findSingleUser(this.props.userID);
      this.setState({ message: "" });
    }
  };
  handleComposeMessageProfileButton = event => {
    this.props.postMessageProfile(
      this.props.token,
      this.state.message,
      this.props.userID
    );
    this.props.findSingleUser(this.props.userID);
    this.setState({ message: "" });
  };

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
          value={this.state.message}
          onkeyPress={this.handleComposedEnter}
          maxLength="255"
          style={{ maxWidth: "36em" }}
        />
        <Button
          style={{
            color: "rgb(45,45,45)",
            padding: "5px"
          }}
          onClick={this.handleComposedEnterButton}
        >
          Kweet
        </Button>
      </Form>
    );
  };

  handleComposedEnter = event => {
    if (event.key === "Enter") {
      this.props.postMessageProfile(this.props.token, this.state.message);
      this.props.fetchMessages();
      this.setState({ message: "" });
    }
  };

  handleNewComposedButton = event => {
    this.props.postMessageFeed(this.props.token, this.state.message);
    this.props.fetchMessages();
    this.setState({ message: "" });
  };

  render() {
    return (
      <Switch>
        <Route path="/home" component={this.kweetForm} />
        <Route path="/feed" component={this.displayFeed} />
      </Switch>
    );
  }
}
function mapStateToProps(state) {
  return {
    token: state.auth.token,
    userID: state.userID
  };
}

const mapDispatchToProps = dispatch => {
  return {
    composeMessageFeed: (token, text) => {
      dispatch(composeMessageFeed(token, text));
    },
    postMessageProfile: (token, text, userID) => {
      dispatch(postMessageProfile(token, text, userID));
    },
    findSingleUser: userID => {
      dispatch(findSingleUser(userID));
    },
    fetchMessages: () => {
      dispatch(fetchMessages());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewKweet);
