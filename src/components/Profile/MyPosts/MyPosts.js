import React from "react";
import Post from "./Post/Post";
import './MyPosts.css';

const MyPosts = () => {

	let postsData = [
		{id:1, message: 'Hello!! ', likesCount: 12},
		{id:2, message: 'it is my first post ', likesCount: 0},
	]

	let posts = postsData.map((everyPost) => {
		return (
			<Post message={everyPost.message} likesCount={everyPost.likesCount}/>
		)
	})
	return (
		<div>
			<div>
				My posts
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className='posts'>
				{posts}
			</div>

		</div>

	)
}

export default MyPosts;