import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Messages from "./Messages";
import { getMessages } from "../Actions";
import { Message } from "semantic-ui-react";

const form = {
  MessagesList: {
    color: "white",
    textALign: "center",
    margin: "auto"
  }
};

class MessagesList extends Component {
  componentDidMount() {
    this.props.getMessages()
  }

  render() {
    return (
    <Fragment>
    {this.props.messages.map(Message => (
        text={Message}   
    ))}

    </Fragment>
    );
}

const mapStateProps = state => {
  return { messages: state.messages.messages };
};

const mapDispatchProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages())}
    }
  }

  export default connect(
      mapStateProps, 
      mapDispatchProps
        )(MessagesList);
