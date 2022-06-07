import React from "react";
import './Dialogs.css';


const Dialogs = (props) => {
	return (
		<div className='dialogs'>
			<div className='dialogsItems'>
				<div className='dialog'>
					Tania
				</div>
			</div>

			<div className='dialogsItems'>
				<div className='dialog'>
					Tania
				</div>
			</div>

			<div className='dialogsItems'>
				<div className='dialog'>
					Tania
				</div>
			</div>

			<div className='dialogsItems'>
				<div className='dialog'>
					Tania
				</div>
			</div>

			<div className='dialogsItems active'>
				<div className='dialog'>
					Tania
				</div>
			</div>

			<div className='dialogsItems'>
				<div className='dialog'>
					Tania
				</div>
			</div>
			<div className='messages'>
				<div className='message'>Hi</div>
				<div className='message'>How are you?</div>
				<div className='message'>Foo</div>

			</div>
		</div>

	)
}

export default Dialogs



