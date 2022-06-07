import React from "react";
import './Dialogs.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	let path = '\'/dialogs/\' + props.id'
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
	return (
		<div className='dialogs'>
			<div className='dialogsItems'>
				<DialogItem name='Tania' id='1'/>
				<DialogItem name='Ed' id='2'/>
				<DialogItem name='Natasha' id='3'/>
				<DialogItem name='Galina' id='4'/>
				<DialogItem name='Anatoliy' id='5'/>
				<DialogItem name='Andres' id='3'/>
			</div>

			<div className='messages'>
				<Message message='Hi'/>
				<Message message='How are you?'/>
				<Message message='Foo'/>
				<Message message='Foo'/>
				<Message message='Foo'/>


			</div>
		</div>

	)
}

export default Dialogs



