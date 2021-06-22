/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<div className={s.dialog}>
			<NavLink activeClassName={s.active} to={path}>
				<img src={props.avatar} alt="" />
				<span className={s.name}>
					{props.name}	
				</span>
			</NavLink>
		</div>
	);
};


export default DialogItem;