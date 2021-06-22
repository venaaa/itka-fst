/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

// import s from './Profile.module.css';



const Profile = (props) => {
	return (
		<section>
			<ProfileInfo />
			<MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} />
		</section>
	);
};

export default Profile;

