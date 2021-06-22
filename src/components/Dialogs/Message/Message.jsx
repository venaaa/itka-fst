/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import s from '../Dialogs.module.css';

const Message = (props) => {
	return (
		<div className={s.message}>
			{props.message}
		</div>
	);
};

export default Message;