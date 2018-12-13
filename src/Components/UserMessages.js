import { MessagesList } from "./MessagesList";
import { getMessages, toggleLike } from "../Actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
      messages: state.loggedInUser.messages.map(message => {
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
  