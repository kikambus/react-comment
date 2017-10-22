import React, { Component } from 'react';
import Form from './Form';
import CommentsBox from './CommentsBox';



export default class CommentsDefault extends React.Component {
    render() {
        return (
            <div>
                <Form />
                <CommentsBox />
            </div>
        );
    }
}