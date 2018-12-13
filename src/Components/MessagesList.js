
import React, { Component, Fragment } from "react";
import { getMessages, toggleLike } from "../Actions/actions";
import { connect } from "react-redux";
import Message from "./Message";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";

export class MessagesList extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  formatKweetDate = date => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    const zeros = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];

    let dateObject = new Date(date);
    let month = dateObject.getUTCMonth();
    let day = dateObject.getUTCDate();
    let year = dateObject.getUTCFullYear();
    let hours = dateObject.getHours();

    let ending = "AM";
    if (hours === 0) {
      hours = 12;
    } else if (hours < 10) {
      hours = zeros[hours];
    } else if (hours === 12) {
      ending = "PM";
    } else if (hours > 12) {
      hours = hours - 12;
      ending = "PM";
    }
    let minutes = dateObject.getMinutes();
    if (minutes < 10) {
      minutes = zeros[minutes];
    }
    let seconds = dateObject.getSeconds();
    if (seconds < 10) {
      seconds = zeros[seconds];
    }
    return "${months[month]} ${day}, ${year} at ${hours}:${minutes}:${seconds} ${ending}";
  };

  render() {
    return (
      <div
        style={{
          display: "flex",

        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Switch>
            <Route path="/feed" />
          </Switch>
        </Container>
        
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
      </div>
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

// possible logic to add from jsx file, this would allow us to filter users and return their messages.
// const mapDispatchToProps = dispatch => {
//   return {
//     findUsers: (limit, offset) => {
//       dispatch(findUsers(limit, offset));
//     },
//     findSingleUser: userID => {
//       dispatch(findSingleUser(userID));
//     },
//     getMessages: () => {
//       dispatch(getMessages());
//     }
//   };
// };