import React, { Component } from 'react';
import CommentsStatus from './CommentsCount';
import CommentsList from './CommentsList';

export default class CommentsBox extends React.Component {
    render() {
        return (
            <div className="comments">
                <CommentsList />
            </div>
        );
    }
}