import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Messages extends Component {
    render() {
        return (
            <Fragment>
                <div>{this.props.text}</div>
                <div>{this.props.userId}</div>
                    <div>Kweeted</div>
            </Fragment>
        );
    };
};

export default Messages;