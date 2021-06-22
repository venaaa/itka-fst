/* eslint-disable react/jsx-key */
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from './redux/state';


// Создаем функцию ререндера нашего приложения, если в стейте проихошли какие то изменения.
let rerenderEntreTree = (state) => {
	// рендерим приложение
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};


rerenderEntreTree(state);

subscribe(rerenderEntreTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
