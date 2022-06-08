import React from "react";
import './Dialogs.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className='dialog'>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className='message'>{props.message}</div>
	)
}

const Dialogs = (props) => {

	let dialogsData = [
		{id:1, name: 'Tania'},
		{id:2, name: 'Ed'},
		{id:3, name: 'Natasha'},
		{id:4, name: 'Galina'},
		{id:5, name: 'Anatoliy'},
		{id:6, name: 'Andres'},
	]

	let messagesData = [
		{id:1, message: 'Hi'},
		{id:2, message: 'How are you?'},
		{id:3, message: 'Foo'},
		{id:4, message: 'Foo'},
		{id:5, message: 'Foo'},

	]

	return (
		<div className='dialogs'>
			<div className='dialogsItems'>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
				<DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
			</div>

			<div className='messages'>
				<Message message={messagesData[0].message} id={messagesData[0].id}/>
				<Message message={messagesData[1].message} id={messagesData[1].id}/>
				<Message message={messagesData[2].message} id={messagesData[2].id}/>
				<Message message={messagesData[2].message} id={messagesData[3].id}/>
				<Message message={messagesData[0].message} id={messagesData[4].id}/>


			</div>
		</div>

	)
}

export default Dialogs



