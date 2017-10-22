import React, { Component } from 'react';
import firebase from 'firebase';

export default class Form extends React.Component {
    _submitForm(event) {
        event.preventDefault();

        if (this._author.value.length && this._author.value.length) {
            const comment = {
                name: this._author.value,
                text: this._text.value
            }

            firebase.database().ref().child('comments').push(comment).then(() => {
                this._author.value = '';
                this._text.value = '';
            });
        }
    }

    render() {
        return (
            <form className="comment-form" onSubmit={this._submitForm.bind(this)}>
                <input type="text" className="inpt" placeholder="User" ref={input => this._author = input} />
                <textarea className="textarea"  placeholder="Comment" ref={textarea => this._text = textarea}></textarea>
                <input type="submit" className="sbmt" value="send" />
                {console.log('this', this)}
            </form>
        );
    }
}