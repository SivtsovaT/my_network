import React from "react";
import Post from "./Post/Post";
import './MyPosts.css';

const MyPosts = () => {

	let postsData = [
		{id:1, message: 'Hello!! ', likesCount: 12},
		{id:2, message: 'it is my first post ', likesCount: 0},


	]
	return (
		<div>
			<div>
				My posts
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className='posts'>
				<Post message={postsData[0].message} likesCount={postsData[0].id}/>
				<Post message={postsData[1].message} likesCount={postsData[1].id}/>

			</div>

		</div>

	)
}

export default MyPosts;