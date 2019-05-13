/*===================== NAVBAR =====================*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../Store/actions/auth';

class Navbar extends Component {
	logout = (e) => {
		e.preventDefault();
		this.props.logout();
	}

	render() {
		return (
			<nav className='navbar navbar-expand'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						<Link to='/' className='navbar-brand'>
							<img src='https://solfo.pimg.net/usmedia/p/r/650x500/photos/2nnj-MCc15_o--/sommerset-paving-ann-arbor-mi.jpg' alt='Biddr Home' />
						</Link>
					</div>

					{this.props.currentUser.isAuthenticated ? (
						<ul className='nav navbar-nav navbar-right'>
							<li>
								<Link to={`/users/${this.props.currentUser.user.id}/projects/new`}>
									New Project
								</Link>
							</li>
							<li>
								<a onClick={this.logout}>Log out</a>
							</li>
						</ul>
					)
					: 
					(
						<ul className='nav navbar-nav navbar-right'>
							<li>
								<Link to='/signup'>Sign Up</Link>
							</li>
							<li>
								<Link to='/signin'>Log In</Link>
							</li>
						</ul>
					)
					}
				</div>
			</nav>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {logout})(Navbar);