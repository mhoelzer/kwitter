import React, { Component, Fragment } from "react";
import { getMessages, toggleLike } from "../Actions/actions";
import { connect } from "react-redux";
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
          <Message
            key={message.id}
            text={message.text}
            username={message.username}
            toggleLike={() => this.props.toggleLike(message.id)}
            numOfLikes={message.likes.length}
            isLiked={message.isLiked}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages.map(message => {
      const like = message.likes.find(
        like => like.userId === state.authentication.id
      );
      if (like) {
        return {
          ...message,
          isLiked: true
        };
      } else {
        return {
          ...message,
          isLiked: false
        };
      }
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      dispatch(getMessages());
    },
    toggleLike: messageId => dispatch(toggleLike(messageId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList);
