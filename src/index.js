import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id:1, message: "Hello! I am learning React.", likesCount: 5 },
  { id:2, message: "Look, today is a good day.", likesCount: 7 },
  { id:3, message: "How about reading some article?", likesCount: 10 }
];

let dialogs = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Andrew" },
  { id: 3, name: "Dennis" },
  { id: 4, name: "Alexei" },
  { id: 5, name: "Artem" }
];

let messages = [
  { id: 1, message: "Hello, how are you?" },
  { id: 2, message: "Let's go to gym." },
  { id: 3, message: "Have you done EO lab?" }
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
