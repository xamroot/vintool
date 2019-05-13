import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects, removeProject } from '../Store/actions/projects';
import ProjectItem from '../Components/ProjectItem';

class ProjectList extends Component {
	componentDidMount() {
		this.props.fetchProjects();
	}
	render() {
		const { projects, removeProject, currentUser } = this.props;
		let projectList = projects.map(project => (
			<ProjectItem 
				key={project._id} 
				title={project.title}
				date={project.date}
				estimator={project.estimator}
				clientAddress={project.clientAddress}
				username={project.user.username}
				profileImageUrl={project.user.profileImageUrl}
				removeProject={removeProject.bind(this, project.user._id, project._id)}
				isCorrectUser={currentUser === project.user._id}
			/>	
		));

		return (
			
			<div className='row'>
				<div className='col-md-12'>
					<ul className='list-group' id='projects'>
						{projectList}
					</ul>
				</div>
			</div>
			
		);
	}
}

function mapStateToProps(state) {
	return {
		projects: state.projects,
		currentUser: state.currentUser.user.id
	};
}

export default connect(mapStateToProps, { fetchProjects, removeProject })(ProjectList);