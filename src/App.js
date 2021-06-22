/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router';

// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar state={props.state.friendsPage} />
			<div className="app-wrapper-content">
				<Route path="/profile" render={() =>
					<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />

				<Route path="/dialogs" render={() =>
					<Dialogs dialogsPage={props.state.dialogsPage} sendMessage={props.sendMessage} updateNewMessageText={props.updateNewMessageText} />} />

				<Route path="/news" component={News} />
				<Route path="/music" component={Music} />
				<Route path="/settings" component={Settings} />
				<Route path="/friends" render={() => <Friends state={props.state.friendsPage} />} />
			</div>
		</div>
	);
};

export default App;
