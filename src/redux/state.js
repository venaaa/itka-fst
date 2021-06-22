/* eslint-disable no-debugger */
//Получаем посты с сервера
//Получаем диалоги с сервера
//Получаем сообщения с сервера

let rerenderEntreTree = () => {
};

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are u?', likesCount: 12 },
			{ id: 2, message: 'Thats my first post', likesCount: 5 }
		],
		newPostText: 'BStudio.com'
	},
	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Serhii', avatar: 'https://img1.freepng.ru/20180405/ezq/kisspng-customer-service-trade-avatar-5ac6473e9f3962.5807143015229438066522.jpg' },
			{ id: 2, name: 'Mira', avatar: 'https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png' },
			{ id: 3, name: 'Karen', avatar: 'https://i.ya-webdesign.com/images/female-avatar-png-3.png' },
			{ id: 4, name: 'Ann', avatar: 'https://i.ya-webdesign.com/images/female-avatar-png.png' },
			{ id: 5, name: 'Julia', avatar: 'https://zdravcity.ru/upload/blog/%D1%83%D1%87%D0%B5%D0%BD%D1%8B%D0%B9.jpg' }
		],
		messages: [
			{ id: 1, message: 'HELLOOOOO' },
			{ id: 2, message: 'Im trying TRYING' },
			{ id: 3, message: 'Sup, hows it going?' },
			{ id: 4, message: 'Yo!' }
		],
		newMessageText: 'Say Hello!'
	},
	friendsPage: {
		friends: [
			{id: 1, name: 'Mira Blick', avatar: 'https://yt3.ggpht.com/a/AGF-l792cfIQRaclWIxiuAphJFJ0BQ_CgPMxNhiOpg=s900-c-k-c0xffffffff-no-rj-mo'},
			{id: 2, name: 'Ann Schmitt', avatar: 'http://getdrawings.com/free-icon/wow-alliance-icon-57.png'},
			{id: 3, name: 'Julia Metz', avatar: 'http://getdrawings.com/free-icon/wow-alliance-icon-65.png'}
		]
	}
};

window.state = state;

export const updateNewMessageText = (newText) => {
	state.dialogsPage.newMessageText = newText;
	rerenderEntreTree(state);
};

export const sendMessage = () => {
	let newMessage = {
		id: 5,
		message: state.dialogsPage.newMessageText
	};
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntreTree(state);
};

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntreTree(state);
};

export const addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntreTree(state);
};

export const subscribe = (observer) => {
	rerenderEntreTree = observer; // Обсервер паттерн похож на publisher-subscriber
};

export default state;