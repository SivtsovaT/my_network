import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div>
			<div>
				My posts
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className='posts'>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
			</div>

		</div>

	)
}

export default MyPosts;