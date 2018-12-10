import React, { Component, Fragment } from "react";
import { getMessages } from "../Actions/actions";
import {connect} from "react-redux";
import Message from "./Message";

const form = {
  MessagesList: {
    color: "white",
    textALign: "center",
    margin: "auto"
  }
};

class MessagesList extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    return (
      <Fragment>
        <h2>Messaging Feed</h2>
        {this.props.messages.map(message => (
          <Message key={message.id} text={message.text} username={message.username}/>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList);
