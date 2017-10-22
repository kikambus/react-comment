import React, { Component } from 'react';
import CommentsListItem from './CommentsListItem';
import CommentsCount from './CommentsCount';
import CommentsToggle from './CommentsToggle';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyB7JI74WhwgfIe9B1OWZ6REYe76fKJxVGY',
    databaseURL: "https://react-test-6c106.firebaseio.com"
};

firebase.initializeApp(config);

export default class CommentsList extends React.Component {
    constructor() {
        super();

        this.state = {
            showComments: true,
            comments: []
        };
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child('comments'), 'comments');
    }

    _toggleShowComments() {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    render() {
        /*const comments = [
            {
                name: 'Vasia',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis mollitia necessitatibus pariatur? Delectus enim est iure numquam quas quia quo temporibus vero voluptates? Aliquid id pariatur perferendis quod veritatis, voluptatem'
            },
            {
                name: 'Nick',
                text: 'Delectus enim est iure numquam quas quia quo temporibus vero voluptates?'
            },
            {
                name: 'Loren',
                text: 'Delectus enim est iure numquam quas quia quo temporibus vero voluptates? Aliquid id pariatur perferendis quod veritatis, voluptatem.'
            }
        ];*/

        const commentsCount = this.state.comments.length;

        let commentsList;
        if (commentsCount > 0 && this.state.showComments) {
            commentsList = <div className="comments-list">
                {
                    this.state.comments.map((comment, index) => {
                        return <CommentsListItem key={index} name={comment.name} text={comment.text} count={index} id={comment['.key']}/>
                    })
                }
            </div>
        }

        return (
            <div>
                <div className="comments-status">
                    <CommentsCount commentsCount={commentsCount} />
                    <CommentsToggle isShow={this.state.showComments} commentsToggle={this._toggleShowComments.bind(this)} />
                </div>
                {commentsList}
            </div>

        );
    }
}

ReactMixin(CommentsList.prototype, ReactFireMixin);