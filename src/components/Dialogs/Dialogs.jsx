/* eslint-disable no-debugger */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
	//маппим массив диалогов в массив с компонентами для отрисовки
	let dialogsElements = props.dialogsPage.dialogs.map((dialog) => {
		return <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />;
	});

	//маппим массив сообщений в массив с компонентами для отрисовки
	let messagesElements = props.dialogsPage.messages.map((message) => {
		return <Message message={message.message} />;
	});

	let newMessageEl = React.createRef();

	let sendMess = () => {
		props.sendMessage();
	};

	let onMessChange = () => {
		let text = newMessageEl.current.value;
		props.updateNewMessageText(text);
	};

	return (
		<>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{dialogsElements}
				</div>
				<div className={s.messages}>
					{messagesElements}
				</div>
			</div>
			<div className={s.messageInput}>
				<textarea onChange={ onMessChange } ref={newMessageEl} cols="50" rows="1" value={props.dialogsPage.newMessageText} />
				<button onClick={ sendMess }>Отправить</button>
			</div>
		</>
	);
};

export default Dialogs;