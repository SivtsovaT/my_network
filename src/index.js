import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


let postsData = [
	{id:1, message: 'Hello!! ', likesCount: 12},
	{id:2, message: 'it is my first post ', likesCount: 0},
]

let dialogsData = [
	{id:1, name: 'Tania'},
	{id:2, name: 'Ed'},
	{id:3, name: 'Natasha'},
	{id:4, name: 'Galina'},
	{id:5, name: 'Anatoliy'},
	{id:6, name: 'Andres'},
]

let messagesData = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How are you?'},
	{id: 3, message: 'Foo'},
	{id: 4, message: 'Foo'},
	{id: 5, message: 'Foo'},

]

ReactDOM.render(
  <App postsData={postsData}
       dialogsData={dialogsData}
	   messagesData={messagesData}
  />,
  document.getElementById('root')
);
