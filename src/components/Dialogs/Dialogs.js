import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

	let dialogsElements = props.dialogsData.map((dialog) => {
		return (
			<DialogItem name={dialog.name} id={dialog.id}/>
		)
	});

	let messagesElements = props.messagesData.map((everyMessage) => {
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



