/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsItem from '../Friends/FriendItem/FriendItem';
import s from './Navbar.module.css';

const Navbar = (props) => {
	let friendsElement = props.state.friends.map((friend) => {
		return <FriendsItem name={friend.name} id={friend.id} avatar={friend.avatar} />;
	});

	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news" activeClassName={s.active}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/music" activeClassName={s.active}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
			</div>
			<div className={`${s.item} ${s.friends}`}>
				<NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
				<div className={s.friendItem}>
					{friendsElement}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;