import React from "react";
import Post from "./Post/Post";
import './MyPosts.css';

const MyPosts = (props) => {

	let posts = props.postsData.map((everyPost) => {
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

