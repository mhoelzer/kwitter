import { MessagesList } from "./MessagesList";
import { getMessages, toggleLike } from "../Actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    messages: state.loggedInUser.messages.map(message => {
      const username = state.loggedInUser.username;
      const like = message.likes.find(
        like => like.userId === state.authentication.id
      );
      if (like) {
        return {
          ...message,
          username,
          isLiked: true
        };
      } else {
        return {
          ...message,
          username,
          isLiked: false
        };
      }
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => {
      // dispatch(getMessages());
    },
    toggleLike: messageId => dispatch(toggleLike(messageId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList);
