import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import Homepage from '../Components/Homepage';
import Authform from '../Components/Authform';
import { authUser } from '../Store/actions/auth';
import { removeError } from '../Store/actions/errors';
import withAuth from '../Hocs/withAuth';
import EstimateApp from './EstimateApp';

const Main = props => {
	const {authUser, errors, removeError, currentUser} = props;
	return (
		<div>
			<Switch>
				<Route exact path='/' render={props => <Homepage currentUser={currentUser} {...props}/>} />
				<Route 
					exact 
					path='/signin'
					render={props => {
						return (
							<Authform 
								removeError={removeError}
								errors={errors} 
								onAuth={authUser} 
								buttonText='Log in' 
								heading='Welcome Back!' 
								{...props} 
							/>
						);
					}}
				/>
				<Route 
					exact 
					path='/signup'
					render={props => {
						return (
							<Authform 
								removeError={removeError}
								errors={errors}
								onAuth={authUser} 
								signUp
								buttonText='Sign up' 
								heading='Register!' 
								{...props} 
							/>
						);
					}}
				/>
				<Route 
					path='/users/:id/projects/new' 
					component={withAuth(EstimateApp)}
				/>
				<Route 
					path='/guest'
					isGuest 
					component={EstimateApp}
				/>
			</Switch>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		errors: state.errors
	};
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));
