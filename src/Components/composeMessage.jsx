import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { compose } from "../../../../Library/Caches/typescript/3.0/node_modules/redux";
import { ReactComponent } from "*.svg";

class NewKweet extends React.Component {
  state = {
    message: ""
  };

  handleMessageSubmit = event => {
    this.setState({ message: event.target.value });
  };

  kweetForm = () => {
    return (
      <Form
        style={{
          marginTop: "10em"
        }}
      >
        <TextArea
          placeholder="What would you like to Kweet about today?"
          onChange={this.handleMessageSubmit}
          value={this.state.message}
          onkeyPress={this.handleMessageSubmitProfileEnter}
          maxLength="255"
        />
        <Button
          style={{
            color: "rgb(45,89,120)",
            padding: "5px"
          }}
          onClick={this.handleMessageSubmitProfileButton}
        >
          Kweet
        </Button>
      </Form>
    );
  };

  handleMessageSubmitProfileEnter= (event) => {
      if (event.target.key === "Kweet") {
          this.props.postMessageProfile(this.props.token, this.state.message, this.props.userID)
          this.props.findSingleUser(this.props.userID)
          this.setState({message: ""})
      }
  }
  handleMessageSubmitProfileButton = (event) => {
      this.props.postMessageProfile(this.props.token, this.state.message, this.props.userID)
      this.props.findSingleUser(this.props.userID)
      this.setState({message: ""})
  }

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
            onkeyPress={this.hand}
            </Form>
      )
  }
