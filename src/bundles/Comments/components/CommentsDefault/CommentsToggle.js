import React, { Component } from 'react';

export default class CommentsToggle extends React.Component {
    render() {
        return (
            <div className="comments-status__toggle">
                <a href="#" className="comments-status__toggle-btn" onClick={this.props.commentsToggle}>
                    {this.props.isShow ? 'Hide' : 'Show'} Comments
                </a>
            </div>
        );
    }
}