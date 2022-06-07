import React from "react";
import './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='nav'>
			<div className='item'>
				<NavLink to='/profile'>Profile</NavLink>
			</div>
			<div className='item active'>
				<NavLink to='/dialogs'>Messages</NavLink>
			</div>
			<div className='item'>
				<a>News</a>
			</div>
			<div className='item'>
				<a>Music</a>
			</div>
			<div className='item'>
				<a>Settings</a>
			</div>
		</nav>
	)
}


export default Navbar;