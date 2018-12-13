import { MessagesList } from "./MessagesList";
import { getMessages, toggleLike } from "../Actions/actions";
import { connect } from "react-redux";
import React, { Fragment } from "react";
import { Message, Form } from "semantic-ui-react";


class UserMessages extends React.Component {

userFeed = () => {
  return (
    <Form
    style={{
      display: "flex",
      justifyContent: "center"
    }}
    >
    </Form>
  );
};

render() {
  return <Fragment>{this.userFeed()}</Fragment>;
  }
}
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
  )(UserMessages);