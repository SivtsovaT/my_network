import React from "react";
import Post from "./Post/Post";
import './MyPosts.css';

const MyPosts = (props) => {

	let posts = props.postsData.map((everyPost) => {
		return (
			<Post message={everyPost.message} likesCount={everyPost.likesCount}/>
		)
	})

	let newPostElement = React.createRef();
	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	}

	return (
		<div>
			<div>
				My posts
				<textarea ref={newPostElement}></textarea>
				<button onClick={addPost}>Add post</button>
			</div>
			<div className='posts'>
				{posts}
			</div>

		</div>

	)
}

export default MyPosts;

