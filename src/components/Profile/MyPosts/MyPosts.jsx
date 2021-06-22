/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import Post from './Post/Post';

const MyPosts = (props) => {
	// маппим массив постов в массив с компонентами для отрисовки
	let postElements = props.posts.map((post) => {
		return <Post message={post.message} likesCount={post.likesCount} />;
	});

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={s.posts}>
			My posts
			<div className="new-post">
				<textarea onChange={ onPostChange } ref={newPostElement} cols="30" rows="3" value={props.newPostText} />
				<button onClick={ addPost } >Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.otherposts}>
				{/* Импортируем и используем массив postElements из index.js */}
				{postElements}
			</div>
		</div>
	);
};

export default MyPosts;