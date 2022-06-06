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
				<Post message={'Hello!!  '} likesCount={23}/>
				<Post message={'How are you?  '} likesCount={0}/>

			</div>

		</div>

	)
}

export default MyPosts;