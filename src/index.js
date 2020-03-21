import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {addPost, updateNewPostText, sendMessage, updateNewMessageText} from './redux/state';
import {renderEntireTree} from './redux/render';


renderEntireTree(state, addPost, updateNewPostText, sendMessage, updateNewMessageText);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
