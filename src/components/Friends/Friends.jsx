/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import FriendsItem from './FriendItem/FriendItem';
// import s from './Friends.module.css';

const Friends = (props) => {
	let friendsElement = props.state.friends.map((friend) => {
		return <FriendsItem name={friend.name} id={friend.id} avatar={friend.avatar} />;
	});

	return (
		<div>
			{friendsElement}
		</div>
	);
};

export default Friends;