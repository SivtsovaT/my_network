import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'Foo'},
		{id: 4, message: 'Foo'},
		{id: 5, message: 'Foo'},

	]
	let dialogsElements = dialogsData.map((dialog) => {
		return (
			<DialogItem name={dialog.name} id={dialog.id}/>
		)
	});

	let messagesElements = messagesData.map((everyMessage) => {
		return (
			<Message message={everyMessage.message}/>
		)
	})

	return (
		<div className='dialogs'>
			<div className='dialogsItems'>
				{dialogsElements}
			</div>

			<div className='messages'>
				{messagesElements}
			</div>
		</div>

	)
}

export default Dialogs



