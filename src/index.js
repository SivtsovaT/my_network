import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


let postsData = [
	{id:1, message: 'Hello!! ', likesCount: 12},
	{id:2, message: 'it is my first post ', likesCount: 0},
]

ReactDOM.render(
  <App postsData={postsData}/>,
  document.getElementById('root')
);
