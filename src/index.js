import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentsDefault from './bundles/Comments/components/CommentsDefault';

/*console.log(firebase);

var config = {
    apiKey: 'AIzaSyB7JI74WhwgfIe9B1OWZ6REYe76fKJxVGY',
    databaseURL: "https://react-test-6c106.firebaseio.com"
};
//console.log(firebase.database().ref());

firebase.initializeApp(config);*/

render (
    <CommentsDefault />,
    document.querySelector('.comment')
);

module.hot.accept(); // for react-hot loader




















































/*
import React from 'react';
import { render } from 'react-dom';
import { UsersListContainer } from "./bundles/Users/components/UsersList";
import Test from './mytest';

render (
    <div>
        <UsersListContainer />
        <Test />
    </div>,
    document.querySelector('#root')
);


*/


/*import Test from './test';
import Test2 from './test2';

render (
    <div>
        Hello react!22
        <Test />
        <Test2 />
    </div>,

    document.querySelector('#root')
);*/

module.hot.accept(); // for react-hot loader