import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentsDefault from './bundles/Comments/components/CommentsDefault';

render (
    <CommentsDefault />,
    document.querySelector('.comment')
);

module.hot.accept(); // for react-hot loader