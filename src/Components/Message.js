import React, { Component, Fragment } from 'react';

class Message extends Component {
    render() {
        return (
            <Fragment>
                <div>{this.props.text}</div>
                <div>{this.props.username}</div>
                    <div>Kweeted by</div>
            </Fragment>
        );
    };
};

export default Message;