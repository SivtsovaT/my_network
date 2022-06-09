import {rerenderEntireTree} from "../render";

let state = {
	profilePage: {
		posts: [
			{id:1, message: 'Hello!! ', likesCount: 12},
			{id:2, message: 'it is my first post ', likesCount: 0},
		],

	},
	dialogsPage: {
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'Foo'},
			{id: 4, message: 'Foo'},
			{id: 5, message: 'Foo'},

		],
		dialogs: [
			{id:1, name: 'Tania'},
			{id:2, name: 'Ed'},
			{id:3, name: 'Natasha'},
			{id:4, name: 'Galina'},
			{id:5, name: 'Anatoliy'},
			{id:6, name: 'Andres'},
		],
	}


}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0
	}
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
}

export default state;