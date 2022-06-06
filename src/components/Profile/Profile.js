import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import './Profile.css';

const Profile = () => {
	return (
		<div className='content'>
			<div>
				<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
			</div>
			<div>
				<img className='ava' src='https://klike.net/uploads/posts/2019-06/1560329641_2.jpg'/>
			</div>
			<MyPosts/>
		</div>
	)
}

export default Profile;