/* eslint-disable react/prop-types */
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://img1.freepng.ru/20180405/ezq/kisspng-customer-service-trade-avatar-5ac6473e9f3962.5807143015229438066522.jpg" alt="" />
			{props.message}
			<div className={s.like}>
				<span>{props.likesCount} likes</span>
			</div>
		</div>
	);
};

export default Post;