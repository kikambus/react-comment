import React, { Component } from 'react';
import firebase from 'firebase';

export default class CommentsListItem extends  React.Component {
    _removeComment(commentId, event) {

        if (confirm('Are you really want to remove this comment?')) {
            event.preventDefault();

            firebase.database().ref().child('comments').child(commentId).remove();
            console.log(commentId);
        }
    }

    render() {
        return (
            <div className="comments-list__item">
                <div className="comments-list__name">{this.props.name}</div>
                <div className="comments-list__text">{this.props.text}</div>
                <a href="#" className="comments-list__btn" onClick={this._removeComment.bind(this, this.props.id)}>Remove</a>
            </div>
        );
    }
}