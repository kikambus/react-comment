import React, { Component } from 'react';

export default class CommentsCount extends React.Component {
    _getCommentTitle (commentsCount) {
        if (commentsCount == 0) {
            return 'NO comments yet'
        } else if (commentsCount == 1 ) {
            return '1 comment'
        } else {
            return `${commentsCount} comments`;
        }
    }

    render () {
        return (
            <div className="comments-status__count">{this._getCommentTitle(this.props.commentsCount)}</div>
        );
    }
}