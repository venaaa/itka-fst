/* eslint-disable react/prop-types */
import React from 'react';
import s from './FriendItem.module.css';

const FriendsItem = (props) => {
	return (
		<div className={s.item}>
			<img src={props.avatar} alt=""/>
			<span className={s.name}>
				{props.name}
			</span>
		</div>
	);
};

export default FriendsItem;