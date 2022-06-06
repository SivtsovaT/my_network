import React from "react";
import './Post.css';

const Post = (props) => {
	return (
		<div className='item'>
			<img src='https://klike.net/uploads/posts/2019-06/1560329641_2.jpg'/>
			<div>
				{props.message}
				<span>like {props.likesCount}</span>
			</div>
		</div>
	)
}

export default Post


