import React from 'react';
import {Link} from 'react-router-dom';

let Navbar = props => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<h2 className='mr-5 ml-3' style={{color:'#ffc107'}}> Pern Tool </h2>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item active">
			        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
			      </li>
			      <li class="nav-item">
			        <Link class="nav-link" to="/settings">Settings</Link>
			      </li>
				</ul>
			</div>
		</nav>
		);
}

export default Navbar;